import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", papel: "1" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosParaEnviar = {
      ...form,
      papel: Number(form.papel),
    };

    try {
      const response = await fetch("http://localhost:3000/api/usuarios/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnviar),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.erro || "Erro ao cadastrar");
        return;
      }

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Conta criada com sucesso!");

      if (data.user.papel === 0) {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/user");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4a3521] to-[#2b1d14] p-6">
      <div className="bg-[#3c2f25]/60 border border-[#5a4637] backdrop-blur-md shadow-xl rounded-3xl shadow-2xl p-12 w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold text-[#f2e7c9] text-center mb-6">Criar Conta</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Nome */}
          <div className="flex flex-col text-left">
            <label htmlFor="nome" className="text-[#f2e7c9] font-medium mb-1">Nome</label>
            <input
              type="text"
              id="nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="p-3 rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-[#e9d9b8]/50 outline-none focus:ring-2 focus:ring-[#d2b48c] rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              placeholder="Digite seu nome"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-[#f2e7c9] font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-[#e9d9b8]/50 outline-none focus:ring-2 focus:ring-[#d2b48c] rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              placeholder="Digite seu email"
              required
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col text-left">
            <label htmlFor="senha" className="text-[#f2e7c9] font-medium mb-1">Senha</label>
            <input
              type="password"
              id="senha"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
              className="p-3 rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-[#e9d9b8]/50 outline-none focus:ring-2 focus:ring-[#d2b48c] rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {/* Papel */}
          <div className="flex flex-col text-left">
            <label htmlFor="papel" className="text-[#f2e7c9] font-medium mb-1">Selecionar Papel</label>
            <select
              id="papel"
              value={form.papel}
              onChange={(e) => setForm({ ...form, papel: e.target.value })}
              className="p-3 rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] placeholder-[#e9d9b8]/50 outline-none focus:ring-2 focus:ring-[#d2b48c] rounded-lg bg-[#5a4637]/40 text-[#f2e7c9] outline-none focus:ring-2 focus:ring-white"
              required
            >
              <option value="1">Usuário</option>
              <option value="0">Administrador</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#c8a56a] text-[#3b2a1e] font-bold tracking-wide rounded-xl shadow-lg hover:bg-[#dbb986] transition hover:bg-[#e6c9a8] font-bold rounded-xl shadow-lg hover:bg-[#dbb986] transition"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-[#f2e7c9] mt-5 text-center">
          Já tem uma conta? <Link to="/login" className="font-semibold underline">Fazer Login</Link>
        </p>
      </div>
    </div>
  );
}

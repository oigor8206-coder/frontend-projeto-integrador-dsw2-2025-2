import { useState, useContext } from "react";
import { AuthContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ nome: "", email: "", senha: "", papel: "0" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.nome, form.email, form.senha, Number(form.papel));
      alert("Conta criada com sucesso!");
      navigate("/perfil");
    } catch (error) {
      alert("Erro ao criar conta: " + (error.response?.data?.erro || "Desconhecido"));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Nome" 
          value={form.nome}
          onChange={e => setForm({...form, nome: e.target.value})}
          required 
        />
        <br/><br/>
        
        <input 
          type="email" placeholder="Email" 
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          required 
        />
        <br/><br/>
        
        <input 
          type="password" placeholder="Senha" 
          value={form.senha}
          onChange={e => setForm({...form, senha: e.target.value})}
          required 
        />
        <br/><br/>

        <label>Tipo de Conta:</label>
        <select 
          value={form.papel} 
          onChange={e => setForm({...form, papel: e.target.value})}
          style={{ marginLeft: 10 }}
        >
          <option value="0">Aluno</option>
          <option value="1">Professor / Admin</option>
        </select>
        <br/><br/>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
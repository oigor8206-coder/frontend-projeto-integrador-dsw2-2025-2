import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/encomendas"); // redireciona
    } else {
      setErro(data.message || "Credenciais inválidas");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      {erro && <p className="text-danger">{erro}</p>}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Senha:</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

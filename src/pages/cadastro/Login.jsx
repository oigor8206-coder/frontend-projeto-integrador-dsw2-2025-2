import { useState, useContext } from "react";
import { AuthContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.senha);
      navigate("/perfil");
    } catch (error) {
      console.error(error);
      alert("Login falhou!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
        <input type="password" placeholder="Senha" onChange={e => setForm({...form, senha: e.target.value})}/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
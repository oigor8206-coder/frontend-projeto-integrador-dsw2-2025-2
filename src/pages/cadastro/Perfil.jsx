import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [form, setForm] = useState({ nome: "", email: "", senha: "" });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/usuarios/login");
            return;
        }
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setForm({ nome: parsedUser.nome, email: parsedUser.email, senha: "" });
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3000/api/usuarios/logout", { method: "POST" });
        } catch (e) {
            console.error("Erro ao fazer logout", e);
        }
        localStorage.clear();
        navigate("/login");
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        const dadosParaEnviar = {
            nome: form.nome,
            email: form.email,
            senha: form.senha
        };

        try {
            const response = await fetch(`http://localhost:3000/api/usuarios/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(dadosParaEnviar)
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.erro || "Erro ao atualizar");
                return;
            }

            const newUser = { ...user, ...data };
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
            setForm({ ...form, senha: "" });
            alert("Perfil atualizado com sucesso!");

        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Tem certeza? Essa ação é irreversível.")) return;

        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`http://localhost:3000/api/usuarios/${user.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const data = await response.json();
                alert(data.erro || "Erro ao excluir conta");
                return;
            }

            alert("Conta excluída.");
            localStorage.clear();
            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    if (!user) return <p>Carregando...</p>;

    return (
        <div 
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
        >
            <div 
                className="card shadow-lg p-4"
                style={{
                    width: "480px",
                    backgroundColor: "#fff5e1",
                    border: "3px solid #8B4513",
                    borderRadius: "18px"
                }}
            >
                <h2 
                    className="text-center mb-3"
                    style={{ color: "#8B4513", fontWeight: "bold" }}
                >
                    Perfil de {user.nome}
                </h2>

                <p className="text-center" style={{ color: "#5c4033" }}>
                    Papel: <strong>{user.papel === 0 ? "Administrador" : "Usuário"}</strong>
                </p>

                <hr />

                <h4 className="text-center" style={{ color: "#8B4513" }}>Editar Dados</h4>

                <form onSubmit={handleUpdate} className="mt-3">

                    <label className="fw-bold">Nome</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        value={form.nome}
                        onChange={e => setForm({ ...form, nome: e.target.value })}
                        style={{ borderColor: "#8B4513" }}
                    />

                    <label className="fw-bold">Email</label>
                    <input
                        type="email"
                        className="form-control mb-3"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{ borderColor: "#8B4513" }}
                    />

                    <label className="fw-bold">Nova Senha</label>
                    <input
                        type="password"
                        className="form-control mb-4"
                        placeholder="Deixe vazio para não alterar"
                        value={form.senha}
                        onChange={e => setForm({ ...form, senha: e.target.value })}
                        style={{ borderColor: "#8B4513" }}
                    />

                    <button 
                        type="submit"
                        className="btn w-100 mb-3"
                        style={{
                            backgroundColor: "#8B4513",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >
                        Salvar Alterações
                    </button>
                </form>

                <hr />

                <div className="d-flex gap-2">
                    <button 
                        className="btn w-50"
                        onClick={handleDelete}
                        style={{
                            backgroundColor: "#b22222",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >
                        Excluir Conta
                    </button>

                    <button 
                        className="btn w-50"
                        onClick={handleLogout}
                        style={{
                            backgroundColor: "#5c4033",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile

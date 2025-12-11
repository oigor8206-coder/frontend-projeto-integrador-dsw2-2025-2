import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DashboardUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
            return;
        }
        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.papel !== 1) {
            if (parsedUser.papel === 0) {
                navigate("/dashboard/admin");
                return;
            }
        }
        setUser(parsedUser);
    }, [navigate]);

    if (!user) return null;

    return (
        <div
            className="container d-flex flex-column align-items-center py-5"
            style={{ minHeight: "90vh" }}
        >
            {/* TÍTULO */}
            <h1
                className="mb-2"
                style={{ color: "#8B4513", fontWeight: "bold", fontSize: "3rem" }}
            >
                Olá, {user.nome}!
            </h1>

            <p style={{ color: "#5c4033", fontSize: "1.2rem" }}>
                Bem-vindo ao seu painel de usuário.
            </p>

            {/* CARDS */}
            <div className="row mt-4 w-100" style={{ maxWidth: "900px" }}>
                
                {/* CARD 1 */}
                <div className="col-md-6 mb-4">
                    <div
                        className="card shadow p-4 h-100"
                        style={{
                            backgroundColor: "#fff5e1",
                            border: "2px solid #8B4513",
                            borderRadius: "15px"
                        }}
                    >
                        <h3 style={{ color: "#8B4513", fontWeight: "bold" }}>
                            Encomendas
                        </h3>
                        <p style={{ color: "#5c4033" }}>
                            Veja suas encomendas ou envie uma nova solicitação.
                        </p>

                        <div className="d-flex flex-column gap-2 mt-3">
                            <Link
                                to="/encomendas"
                                className="btn"
                                style={{
                                    backgroundColor: "#8B4513",
                                    color: "white",
                                    fontWeight: "bold",
                                    borderRadius: "10px"
                                }}
                            >
                                Ver Encomendas
                            </Link>

                            <Link
                                to="/encomendas/create"
                                className="btn"
                                style={{
                                    backgroundColor: "#5c4033",
                                    color: "white",
                                    fontWeight: "bold",
                                    borderRadius: "10px"
                                }}
                            >
                                Nova Mensagem
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="col-md-6 mb-4">
                    <div
                        className="card shadow p-4 h-100"
                        style={{
                            backgroundColor: "#fff5e1",
                            border: "2px solid #8B4513",
                            borderRadius: "15px"
                        }}
                    >
                        <h3 style={{ color: "#8B4513", fontWeight: "bold" }}>
                            Minha Conta
                        </h3>
                        <p style={{ color: "#5c4033" }}>
                            Gerencie suas informações pessoais.
                        </p>

                        <Link
                            to="/perfil"
                            className="btn mt-3"
                            style={{
                                backgroundColor: "#8B4513",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "10px"
                            }}
                        >
                            Ir para Perfil
                        </Link>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="col-md-6 offset-md-3">
                    <div
                        className="card shadow p-4 h-100"
                        style={{
                            backgroundColor: "#fff5e1",
                            border: "2px solid #8B4513",
                            borderRadius: "15px"
                        }}
                    >
                        <h3 style={{ color: "#8B4513", fontWeight: "bold" }}>
                            Suporte
                        </h3>
                        <p style={{ color: "#5c4033" }}>
                            Precisa de ajuda? Entre em contato conosco.
                        </p>

                        <Link
                            to="/contato"
                            className="btn mt-3"
                            style={{
                                backgroundColor: "#5c4033",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "10px"
                            }}
                        >
                            Contato
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardUser;

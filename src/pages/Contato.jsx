import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"; // Reutilizando a importação padrão

// Componente EncomendasIndexLimpo
const EncomendasIndexLimpo = () => {
    const [encomendas, setEncomendas] = useState([
        // ... (Dados estáticos de encomendas) ...
        {
            id: 101,
            cliente: "João Silva",
            produto: "Laço Comprido Couro Crú",
            status: "Pendente",
            criadoEm: "há 2 dias",
            atualizadoEm: "há 3 horas",
        },
        {
            id: 102,
            cliente: "Maria Souza",
            produto: "Corda Team Roping 10m Azul",
            status: "Entregue",
            criadoEm: "há 5 dias",
            atualizadoEm: "há 1 hora",
        },
        {
            id: 103,
            cliente: "Pedro Laçador",
            produto: "Kit Laço de Treino",
            status: "Pendente",
            criadoEm: "há 1 semana",
            atualizadoEm: "há 30 minutos",
        },
    ]);

    // Função para remover uma encomenda
    const handleRemover = (id) => {
        if (window.confirm("Deseja realmente remover esta encomenda?")) {
            setEncomendas(encomendas.filter(e => e.id !== id));
        }
    };

    // Função para alternar o status
    const handleStatus = (id) => {
        setEncomendas(
            encomendas.map(e => {
                if (e.id === id) {
                    const novoStatus = e.status === "Pendente" ? "Entregue" : "Pendente";
                    return { ...e, status: novoStatus, atualizadoEm: "agora mesmo" };
                }
                return e;
            })
        );
    };

    return (
        // O estilo de fonte e background deve ir no body ou em um wrapper externo.
        // Mantenho aqui por conveniência, mas o ideal é no CSS global.
        <div style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f9f7f2', minHeight: '100vh' }}>
            <Navbar />

            {/* APLICAÇÃO DA CLASSE 'container-fluid' PARA LARGURA TOTAL */}
            {/* Adicionado um padding horizontal (px-4) para o conteúdo não colar nas bordas */}
            <div className="container-fluid py-4 px-4"> 
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 style={{ color: '#8B4513', fontWeight: 'bold' }}>📋 Gerenciamento de Encomendas</h2>
                    <Link to="/encomendas/create" className="btn btn-primary" style={{ backgroundColor: '#8B4513', borderColor: '#8B4513', fontWeight: 'bold' }}>
                        + Nova Encomenda
                    </Link>
                </div>

                {encomendas.length === 0 ? (
                    <div className="alert alert-secondary">Nenhuma encomenda cadastrada.</div>
                ) : (
                    <div className="row">
                        {encomendas.map((e) => (
                            // Envolver o card em uma coluna do grid para um layout mais limpo
                            <div key={e.id} className="col-12 mb-3"> 
                                <div className="card shadow-sm" style={{ borderRadius: '8px', borderColor: '#8B4513', backgroundColor: '#fff5e1' }}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            {/* Detalhes Principais */}
                                            <div>
                                                <h5 className="card-title mb-1" style={{ color: '#8B4513' }}>
                                                    <strong>ID {e.id}:</strong> {e.cliente}
                                                </h5>
                                                <p className="mb-2" style={{ color: '#5c4033' }}>
                                                    <strong>Produto:</strong> {e.produto}
                                                </p>
                                                {/* Badge de Status */}
                                                <span
                                                    className={`badge ${e.status === "Entregue"
                                                        ? "bg-success"
                                                        : "bg-warning text-dark"
                                                    }`}
                                                    style={{ fontWeight: 'bold' }}
                                                >
                                                    {e.status}
                                                </span>
                                            </div>

                                            {/* Datas em texto sutil */}
                                            <small className="text-muted text-end">
                                                Atualizado: {e.atualizadoEm}
                                                <br />
                                                Criado: {e.criadoEm}
                                            </small>
                                        </div>

                                        {/* Botões de Ação */}
                                        <div className="mt-3 pt-3 border-top" style={{ borderColor: '#8B4513' }}>
                                            <button
                                                className="btn btn-sm me-2"
                                                onClick={() => handleStatus(e.id)}
                                                style={{ backgroundColor: '#8B4513', borderColor: '#8B4513', color: 'white' }}
                                            >
                                                {e.status === "Pendente" ? "Marcar Entregue" : "Marcar Pendente"}
                                            </button>

                                            <Link
                                                to={`/encomendas/${e.id}/edit`}
                                                className="btn btn-sm me-2"
                                                style={{ backgroundColor: '#f1a204', borderColor: '#f1a204', color: 'white' }}
                                            >
                                                Editar
                                            </Link>

                                            <button
                                                className="btn btn-sm"
                                                onClick={() => handleRemover(e.id)}
                                                style={{ backgroundColor: '#d9534f', borderColor: '#d9534f', color: 'white' }}
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EncomendasIndexLimpo;
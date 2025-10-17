import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"; // Reutilizando a importação padrão

const EncomendasIndexLimpo = () => {
    // Dados iniciais simulando Encomendas
    const [encomendas, setEncomendas] = useState([
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

    // Função para alternar o status entre Pendente e Entregue
    const handleStatus = (id) => {
        setEncomendas(
            encomendas.map(e => {
                if (e.id === id) {
                    const novoStatus = e.status === "Pendente" ? "Entregue" : "Pendente";
                    // Adicionando um timestamp simples de atualização
                    return { ...e, status: novoStatus, atualizadoEm: "agora mesmo" }; 
                }
                return e;
            })
        );
    };

    return (
        <div>
            {/* Mantendo o Navbar simples e limpo */}
            <Navbar /> 
            
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>📋 Gerenciamento de Encomendas</h2>
                    {/* Botão primário padrão do Bootstrap */}
                    <Link to="/encomendas/create" className="btn btn-primary">
                        + Nova Encomenda
                    </Link>
                </div>

                {encomendas.length === 0 ? (
                    <div className="alert alert-secondary">Nenhuma encomenda cadastrada.</div>
                ) : (
                    // Mapeamento das Encomendas
                    encomendas.map((e) => (
                        // Card simples com sombra leve e margem padrão
                        <div key={e.id} className="card mb-3 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    
                                    {/* Detalhes Principais */}
                                    <div>
                                        <h5 className="card-title mb-1">
                                            <strong className="text-primary">ID {e.id}:</strong> {e.cliente}
                                        </h5>
                                        <p className="mb-2">
                                            <strong>Produto:</strong> {e.produto}
                                        </p>
                                        
                                        {/* Badge de Status com cores claras e escuras */}
                                        <span
                                            className={`badge ${
                                                e.status === "Entregue"
                                                    ? "bg-success"
                                                    : "bg-warning text-dark"
                                            }`}
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
                                <div className="mt-3 pt-3 border-top">
                                    <button
                                        className="btn btn-sm btn-success me-2"
                                        onClick={() => handleStatus(e.id)}
                                    >
                                        {e.status === "Pendente" ? "Marcar Entregue" : "Marcar Pendente"}
                                    </button>

                                    <Link
                                        to={`/encomendas/${e.id}/edit`}
                                        className="btn btn-sm btn-warning me-2"
                                    >
                                        Editar
                                    </Link>

                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleRemover(e.id)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EncomendasIndexLimpo;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assumindo a importação do Navbar e do card Encomeda
import Navbar from '../../components/Navbar';
import Encomeda from '../../components/Encomeda'; 

// Esta componente deve ser ListarEncomendas ou EncomendasIndex
const ListaEncomendas = () => { 
    const [encomendas, setEncomendas] = useState([]);
    const [erro, setErro] = useState(null);

    // Função para deletar
    const handleDelete = async (id) => {
        // Confirmação mais detalhada
        if (!window.confirm(`Tem certeza que deseja excluir a Encomenda #${id}?`)) return;
        
        const token = localStorage.getItem("token"); 
        
        try {
            const response = await fetch(`http://localhost:3000/api/encomendas/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                // CORREÇÃO 1: Usando setEncomendas e filtrando corretamente
                // Remove o item da lista (no frontend)
                setEncomendas(encomendas.filter(e => e.id !== id));
                alert(`Encomenda #${id} excluída com sucesso!`);
            } else {
                alert("Erro ao excluir. Verifique se você tem permissão ou se o ID existe.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão com o servidor.");
        }
    };

    // Função para carregar encomendas
    const fetchEncomendas = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch("http://localhost:3000/api/encomendas", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if(!response.ok) throw new Error("Erro ao buscar dados");
            const data = await response.json();
            setEncomendas(data);
            setErro(null); // Limpa erros antigos se o fetch for bem-sucedido
        } catch (err) {
            // CORREÇÃO 2: Usando err.message
            setErro(err.message); 
        }
    }

    useEffect(() => {
        fetchEncomendas();
    }, []);

    if (erro) return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="alert alert-danger">{erro}</div>
            </div>
        </>
    );

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Minhas Encomendas</h2>

                {/* Botão para criar nova encomenda */}
                <Link to="/encomendas/create" className="btn btn-primary mb-4">
                    + Nova Encomenda
                </Link>

                {/* CORREÇÃO 3: Adicionando a lógica de renderização */}
                <div className='row'>
                    {encomendas.length > 0 ? (
                        encomendas.map(encomenda => (
                            <Encomeda
                                key={encomenda.id}
                                encomenda={encomenda}
                                onDelete={handleDelete} // Passando a função de exclusão
                                // onEdit não é estritamente necessário se você usar o navigate dentro de Encomeda
                            />
                        ))
                    ) : (
                        <div className="col-12 text-center alert alert-info">
                            Nenhuma encomenda encontrada.
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListaEncomendas;
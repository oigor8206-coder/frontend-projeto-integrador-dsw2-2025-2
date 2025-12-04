import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaEncomendas = () => {
    const [encomendas, setEncomendas] = useState([]);
    const [erro, setErro] = useState(null);

    // Função para deletar
    const handleDelete = async (id) => {
        if (!confirm("Tem certeza que deseja excluir?")) return;
        
        const token = localStorage.getItem("token"); // Assumindo que guardou o token aqui
        
        try {
            const response = await fetch(`http://localhost:3000/api/encomendas/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                // Remove da tela sem recarregar a página
                setMensagens(encomendas.filter(m => m.id !== id));
            } else {
                alert("Erro ao excluir. Verifique se você tem permissão.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    // Função para carregar encomendas
    useEffect(() => {
        const fetchEncomenda = async () => {
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
            } catch (err) {
                setErro(err.encomendas);
            }
        }
        fetchEncomenda();
    }, []);

    if (erro) return <div className="alert alert-danger">{erro}</div>;

    return (
        <div className='row'>
            
        </div>
    )
}

export default ListaEncomendas
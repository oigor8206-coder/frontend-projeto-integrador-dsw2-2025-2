import React, { useState, useEffect } from 'react';
// Corrigido o caminho do Navbar para '.../components/Navbar' (subindo dois níveis)
import Navbar from '../../components/Navbar'; 
// Removida a importação do Footer, pois o arquivo não existe na sua estrutura
import { useParams, useNavigate } from 'react-router-dom';

const EncomendasEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Estado unificado para armazenar todos os dados da encomenda
    // **IMPORTANTE**: Ajuste os nomes dos campos (material, cor, observacoes, etc.) 
    // para corresponderem exatamente ao que o seu backend espera/retorna.
    const [encomendaData, setEncomendaData] = useState({
        Usuarios_id: '',
        Usuarios_id_destinatario: '',
        material: '', 
        cor: '',      
        chumbo: '',
        pesoLaco: '',
        observacoes: '',
        // Adicione outros campos da sua encomenda aqui
    });

    const [erro, setErro] = useState(null);
    const [loading, setLoading] = useState(true);

    // Função auxiliar para atualizar qualquer campo do objeto encomendaData
    const handleChange = (e) => {
        const { id, value } = e.target;
        setEncomendaData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // 1. Carregar os dados da Encomenda
    useEffect(() => {
        const fetchEncomenda = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:3000/api/encomendas/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) throw new Error("Encomenda não encontrada ou erro de permissão");

                const data = await response.json();

                // Define o estado com os dados recebidos da API
                // Os campos mapeados aqui devem corresponder à sua API
                setEncomendaData({
                    Usuarios_id: data.Usuarios_id || '',
                    Usuarios_id_destinatario: data.Usuarios_id_destinatario || '',
                    material: data.material || '', 
                    cor: data.cor || '',
                    chumbo: data.chumbo || '',
                    pesoLaco: data.pesoLaco || '',
                    observacoes: data.observacoes || '', 
                });

            } catch (error) {
                setErro(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEncomenda();
    }, [id]);

    // 2. Função de Atualização (Update)
    const handleUpdate = async (e) => {
        e.preventDefault();
        setErro(null);
        const token = localStorage.getItem('token');

        // Prepara os dados: Garante que os IDs são números.
        const dadosAtualizados = {
            ...encomendaData,
            Usuarios_id: Number(encomendaData.Usuarios_id),
            Usuarios_id_destinatario: Number(encomendaData.Usuarios_id_destinatario),
        };

        try {
            const response = await fetch(`http://localhost:3000/api/encomendas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dadosAtualizados)
            });

            if (!response.ok) throw new Error("Erro ao atualizar encomenda. Verifique os dados.");

            alert("Encomenda atualizada com sucesso!");
            navigate("/encomendas");

        } catch (error) {
            setErro(error.message);
        }
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <div className='container mt-5'>
                    <div className="text-center fs-4">Carregando dados da encomenda...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className='container mt-4'>
                {erro && <div className="alert alert-danger">{erro}</div>}

                <form onSubmit={handleUpdate}>
                    <div className='card border-secondary p-4 shadow'>
                        <p className='fs-2 text-center text-primary'>Editar Encomenda #{id}</p>

                        
                        {/* Material */}
                        <div className='mb-3'>
                            <label htmlFor="material" className='form-label'>Material:</label>
                            <input
                                id="material"
                                className='form-control'
                                type="text"
                                value={encomendaData.material}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Cor */}
                        <div className='mb-3'>
                            <label htmlFor="cor" className='form-label'>Cor:</label>
                            <input
                                id="cor"
                                className='form-control'
                                type="text"
                                value={encomendaData.cor}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        {/* Chumbo */}
                        <div className='mb-3'>
                            <label htmlFor="chumbo" className='form-label'>Chumbo:</label>
                            <input
                                id="chumbo"
                                className='form-control'
                                type="text"
                                value={encomendaData.chumbo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Peso do Laço */}
                        <div className='mb-3'>
                            <label htmlFor="pesoLaco" className='form-label'>Peso do Laço:</label>
                            <input
                                id="pesoLaco"
                                className='form-control'
                                type="text"
                                value={encomendaData.pesoLaco}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        {/* Observações (TEXTAREA) */}
                        <div className='mb-3'>
                            <label htmlFor="observacoes" className='form-label'>Observações:</label>
                            <textarea
                                id="observacoes"
                                className='form-control'
                                rows="4"
                                value={encomendaData.observacoes}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        

                        <button type='submit' className='btn btn-lg btn-success w-100 mt-3'>
                            ✅ Salvar Alterações
                        </button>
                        <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/encomendas")}>
                            Voltar
                        </button>
                    </div>
                </form>
            </div>
            {/* O Footer foi removido aqui para evitar o erro de importação */}
        </>
    )
}

export default EncomendasEdit;
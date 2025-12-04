import React, { useState } from 'react';
import Navbar from '../../components/Navbar'; // Assumindo que seu Navbar está em '../components/Navbar'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EncomendarLaco = () => {
    // Estado para armazenar os dados do formulário
    const [dadosEncomenda, setDadosEncomenda] = useState({
        nomeCliente: '',
        material: 'Poliéster', // Valor padrão
        chumbo: '1', // Valor padrão
        pesoLaco: '',
        cor: 'Branco', // Valor padrão
        observacoes: ''
    });
    const [erro, setErro] = useState("");
    const navigate = useNavigate();


    // Função genérica para atualizar o estado ao digitar/selecionar
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosEncomenda(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

       
   

    setErro("");


        // Aqui você faria a lógica de envio (ex: API call, salvar no estado global, etc.)
        console.log('Dados da Encomenda Enviados:', dadosEncomenda);
        //alert(`Encomenda de Laço para ${dadosEncomenda.nomeCliente} registrada com sucesso!`);

        const token = localStorage.getItem('token');
        if (!token) {
            setErro("Você precisa estar logado para fazer encomenda.");
            return;
        }

        const dadosEnviados = {
            usuarios_id: 1,
            material: dadosEncomenda.material,
            chumbo: dadosEncomenda.chumbo,
            peso_laco: dadosEncomenda.pesoLaco,
            cor: dadosEncomenda.cor
            // observacoes: dadosEncomenda.observacoes
        };
        try {
            const response = await fetch("http://localhost:3000/api/encomendas", {
                method: "POST",
                body: JSON.stringify(dadosEnviados),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) throw new Error("Não foi possível salvar");
            navigate("/encomendas");
        } catch (error) {
            console.log(error);
            setErro(error.message);
        }


        // Opcional: Resetar o formulário após o envio
        // setDadosEncomenda({
        //     nomeCliente: '',
        //     material: 'Poliéster',
        //     chumbo: 'Sem Chumbo',
        //     pesoLaco: '',
        //     cor: 'Branco',
        //     observacoes: ''
        // });
    };

    return (
        <div>
            <Navbar />
            <div className="container my-5">
                {/* Cabeçalho da página */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>✏️ Personalize e Encomende Seu Laço</h2>
                    <Link to="/encomendas" className="btn btn-secondary">
                        Voltar ao Catálogo
                    </Link>
                </div>

                <div className="card shadow-lg p-4">
                    <form onSubmit={handleSubmit}>
                    {erro && <div className="alert alert-danger">{erro}</div>}
                        {/* Nome do Cliente */}
                        <div className="mb-3">
                            <label htmlFor="nomeCliente" className="form-label">Seu Nome / Nome para a Encomenda</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nomeCliente"
                                name="nomeCliente"
                                value={dadosEncomenda.nomeCliente}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Material do Laço */}
                        <div className="mb-3">
                            <label htmlFor="material" className="form-label">Material</label>
                            <select
                                className="form-select"
                                id="material"
                                name="material"
                                value={dadosEncomenda.material}
                                onChange={handleChange}
                                required
                            >
                                <option value="Poliéster">Poliéster (Sintético - Team Roping)</option>
                                <option value="Nylon">Nylon (Sintético - Leve)</option>
                                <option value="Couro Crú">Couro Crú (Tradicional - Laço Comprido)</option>
                            </select>
                        </div>

                        {/* Tipo de Chumbo */}
                        <div className="mb-3">
                            <label htmlFor="chumbo" className="form-label">Chumbo (Peso na Ponta)</label>
                            <select
                                className="form-select"
                                id="chumbo"
                                name="chumbo"
                                value={dadosEncomenda.chumbo}
                                onChange={handleChange}
                                required
                            >
                                <option value="1">Sem Chumbo (Padrão)</option>
                                <option value="1">Chumbo Leve</option>
                                <option value="3">Chumbo Médio</option>
                                <option value="6">Chumbo Pesado (Recomendado para Laço Comprido)</option>
                            </select>
                        </div>

                        {/* Peso (Customizado) */}
                        <div className="mb-3">
                            <label htmlFor="pesoLaco" className="form-label">Peso Desejado (Ex: 500g, 650g)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pesoLaco"
                                name="pesoLaco"
                                placeholder="Especifique o peso em gramas (ex: 550g)"
                                value={dadosEncomenda.pesoLaco}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Cor do Laço */}
                        <div className="mb-3">
                            <label htmlFor="cor" className="form-label">Cor</label>
                            <select
                                className="form-select"
                                id="cor"
                                name="cor"
                                value={dadosEncomenda.cor}
                                onChange={handleChange}
                                required
                            >
                                <option value="Branco">Branco Natural</option>
                                <option value="Preto">Preto</option>
                                <option value="Rajado">Rajado (Duas Cores)</option>
                                <option value="Neon">Neon (Amarelo/Verde - Team Roping)</option>
                            </select>
                        </div>

                        {/* Observações Adicionais */}
                        <div className="mb-4">
                            <label htmlFor="observacoes" className="form-label">Observações e Detalhes da Trança (Opcional)</label>
                            <textarea
                                className="form-control"
                                id="observacoes"
                                name="observacoes"
                                rows="3"
                                value={dadosEncomenda.observacoes}
                                onChange={handleChange}
                                placeholder="Ex: 'Quero a argola em aço inox', 'Trança 6 tentos', etc."
                            ></textarea>
                        </div>

                        {/* Botão de Envio */}
                        <button type="submit" className="btn btn-success btn-lg w-100">
                            Enviar Pedido de Orçamento e Encomenda 📝
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EncomendarLaco;
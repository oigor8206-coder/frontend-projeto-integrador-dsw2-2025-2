import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // **1. Importações de Navegação Adicionadas**
import { useState } from 'react';

const [encomenda, setEncomenda] = useState([]);
const handleDelete = async (id) => {
  if (!confirm("Tem certeza que deseja excluir?")) return;
  
  const token = localStorage.getItem("token"); // Assumindo que guardou o token aqui
  
  try {
      const response = await fetch(`http://localhost:3000/api/encomenda/${id}`, {
          method: "DELETE",
          headers: {
              "Authorization": `Bearer ${token}`
          }
      });

      if (response.ok) {
          // Remove da tela sem recarregar a página
          setEncomenda(encomenda.filter(m => m.id !== id));
      } else {
          alert("Erro ao excluir. Verifique se você tem permissão.");
      }
  } catch (error) {
      console.error(error);
      alert("Erro de conexão.");
  }
}; 
// Card estilizado de Encomenda
const Encomenda = ({ encomenda, onEdit }) => {
  // **2. Chamada do Hook useNavigate Adicionada**
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card shadow-sm h-100"
        style={{
          borderRadius: '14px',
          backgroundColor: '#fff5e1',
          border: '2px solid #8B4513'
        }}
      >
        {/* Imagem */}
        {/*
          * Sugestão: Se encomenda.imageUrl existir, use-o. Caso contrário, use a imagem de placeholder.
        */}
        <img
          src="laco.jpg" // Pode ser dinâmico: encomenda.imageUrl || "laco.jpg"
          alt="Laço"
          className="card-img-top"
          style={{
            height: '220px',
            objectFit: 'cover',
            borderTopLeftRadius: '14px',
            borderTopRightRadius: '14px'
          }}
        />

        {/* Título / Nome */}
        <div className="card-body text-center">
          <h4 style={{ color: '#8B4513', fontWeight: 'bold' }}>
            Encomenda #{encomenda.id}
          </h4>

          <h5 style={{ color: '#5c4033', fontWeight: '600' }}>
            {encomenda.nomeCliente}
          </h5>
        </div>

        {/* Informações */}
        <ul className="list-group list-group-flush" style={{ fontSize: '1rem' }}>
          <li className="list-group-item" style={{ backgroundColor: '#f7f4e9' }}>
            <strong>Material:</strong> {encomenda.material}
          </li>

          <li className="list-group-item" style={{ backgroundColor: '#f7f4e9' }}>
            <strong>Cor:</strong> {encomenda.cor}
          </li>

          <li className="list-group-item" style={{ backgroundColor: '#f7f4e9' }}>
            <strong>Chumbo:</strong> {encomenda.chumbo}
          </li>

          <li className="list-group-item" style={{ backgroundColor: '#f7f4e9' }}>
            <strong>Peso do Laço:</strong> {encomenda.pesoLaco}
          </li>
          <li className="list-group-item" style={{ backgroundColor: '#f7f4e9' }}>
            <strong>Observações:</strong> {encomenda.observacoes}
          </li>
        </ul>

        {/* Rodapé */}
        <div
          className="card-footer d-flex justify-content-around"
          style={{ backgroundColor: '#f7f4e9' }}
        >

          {/* O Link estava errado, vou manter apenas o botão usando navigate, que é mais comum com rotas programáticas */}
          {/* O link comentado abaixo foi removido para evitar confusão.
            <Link to={`/encomendas/edit/${encomenda.id}`}> </Link>
          */}

          {/* Botão Editar: Usa navigate do react-router-dom */}
          <button
            className="btn px-4 py-2"
            onClick={() => navigate(`/encomendas/edit/${encomenda.id}`)}
            style={{
              backgroundColor: '#A0522D',
              borderColor: '#8B4513',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: '8px'
            }}
          >
            Editar
          </button>


          {/* Botão Excluir: Usa a função onDelete passada como prop */}
<button
    className="btn px-4 py-2"
    // Verifica se onDelete existe antes de chamá-lo
    onClick={() =>  handleDelete(encomenda.id)} 
    style={{
        backgroundColor: '#8B0000',
        borderColor: '#5c0000',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        borderRadius: '8px'
    }}
>
    Excluir
</button>
        </div>
      </div>
    </div>
  );
};

export default Encomenda;
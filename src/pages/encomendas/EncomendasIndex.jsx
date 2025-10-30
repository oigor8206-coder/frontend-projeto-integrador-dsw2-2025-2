import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
// Importe seu Navbar.js, se ele estiver em um diretório diferente
// import Navbar from "../components/Navbar"; 

const GaleriaLacos = () => {
  // Dados simulados de Produtos (Laços) para a galeria
  const [lacos, setLacos] = useState([
    {
      id: 1,
      nome: "Laço Comprido Couro 4 Tentos",
      descricao: "Trançado artesanalmente, 18 metros. Ideal para competições gaúchas.",
      preco: 450.00,
      imagem: "/images/laco_couro_comprido.jpg",
      categoria: "Laço Comprido",
    },
    {
      id: 2,
      nome: "Corda Team Roping (Cabeceiro)",
      descricao: "Corda de poli 10mm, rigidez média/soft. Para cabeceiro ágil.",
      preco: 189.90,
      imagem: "/images/laco_team_roping_cabeca.jpg", 
      categoria: "Team Roping",
    },
    {
      id: 3,
      nome: "Laço Individual (Tie Down)",
      descricao: "Leve e rápido. Círculo perfeito para laçar bezerros no tempo.",
      preco: 159.90,
      imagem: "/images/laco_tie_down.jpg", 
      categoria: "Laço Individual",
    },
    {
        id: 4,
        nome: "Laço Mirim (Treino)",
        descricao: "Corda sintética 10 metros, macia. Perfeita para treino com cavalete.",
        preco: 99.90,
        imagem: "/images/laco_treino.jpg", 
        categoria: "Treinamento",
      },
      {
        id: 4,
        nome: "Laço Mirim (Treino)",
        descricao: "Corda sintética 10 metros, macia. Perfeita para treino com cavalete.",
        preco: 99.90,
        imagem: "/images/laco_treino.jpg", 
      },
      {
        id: 4,
        nome: "Laço Mirim (Treino)",
        descricao: "Corda sintética 10 metros, macia. Perfeita para treino com cavalete.",
        preco: 99.90,
        imagem: "/images/laco_treino.jpg", 
        categoria: "Treinamento",
      },
      {
        id: 4,
        nome: "Laço Mirim (Treino)",
        descricao: "Corda sintética 10 metros, macia. Perfeita para treino com cavalete.",
        preco: 99.90,
        imagem: "/images/laco_treino.jpg", 
        categoria: "Treinamento",
      },
  ]);

  // Funções de manipulação (remover/editar) foram removidas, pois este é um catálogo de produtos.
  // Se fosse um painel administrativo, elas seriam mantidas.

  return (
    <div>
      { <Navbar /> }
      
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Título da Galeria de Produtos */}
          <h2>🎯 Catálogo: Laços de Rodeio e Lida</h2>
          
          {/* Você pode substituir este Link por um filtro ou deixar um botão de "Ver Todas" */}
          <Link to="/acessorios" className="btn btn-dark">
            Ver Acessórios 🛠️
          </Link>
        </div>

        {lacos.length === 0 ? (
          // Mensagem caso não haja produtos
          <div className="alert alert-warning">Nenhum laço disponível no catálogo.</div>
        ) : (
          // Estrutura de Grid do Bootstrap (exibe 3 cards por linha em telas médias/grandes)
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {lacos.map((laco) => (
              <div key={laco.id} className="col">
                <div className="card h-100 shadow-sm border-secondary">
                  
                  {/* Imagem do Laço */}
                  <img 
                    src={laco.imagem} 
                    className="card-img-top" 
                    alt={`Foto do ${laco.nome}`} 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />

                  <div className="card-body d-flex flex-column">
                    {/* Nome e Categoria */}
                    <h5 className="card-title text-success">{laco.nome}</h5>
                    <p className="card-text text-muted mb-2">{laco.descricao}</p>
                    
                    {/* Preço e Categoria (Badge) */}
                    <div className="mt-auto"> {/* Empurra o conteúdo para baixo */}
                        <span className="badge bg-dark mb-2">{laco.categoria}</span>
                        <h4 className="text-primary mb-3">
                            R$ {laco.preco.toFixed(2).replace('.', ',')}
                        </h4>
                        <button 
                            className="btn btn-outline-success w-100"
                        >
                           comprar 🛒
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

export default GaleriaLacos;
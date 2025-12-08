import React from 'react';
import { Link } from 'react-router-dom';


const Principal = () => {
    return (
        <>  
           
       
        <div className="container my-5 text-center">
            
            {/* Título Principal adaptado para o tema Rodeio */}
            <h1 className="display-4 mb-4 text-primary">
                🤠 Laço Eterno 🌾
            </h1>
            
            {/* Subtítulo/Slogan adaptado para o tema Rodeio */}
            <p className="lead mb-5 text-secondary">
                Precisão e Resistência: Seu equipamento ideal para a Prova do Laço e a Lida de Campo!
            </p>

            {/* Seção da Imagem */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8">
                    {/* Placeholder para a imagem principal da loja. 
                        Mantendo as classes de estilo para destaque.
                        Mude o 'src' para uma imagem de laços de corda ou couro.
                    */}
                    <img 
                        src="laco.jpg" // CAMINHO DA IMAGEM DE LAÇOS DE RODEIO
                        className="img-fluid rounded shadow-lg border border-3 border-info" 
                        alt="Laço de corda profissional e acessórios de montaria"
                        // Estilo simples para limitar o tamanho da imagem, se necessário
                        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                    />
                </div>
            </div>

            {/* Botões de Chamada para Ação adaptados para o tema Rodeio */}
            <div className="mt-4">
                {/* Botão principal: direciona para a loja de laços (Team Roping, Comprido, etc.) */}
                <Link 
                    to="/encomendas" 
                    className="btn btn-info btn-lg text-white mx-2"
                >
                    Ver Laços e Cordas Profissionais 🎯
                </Link>

                {/* Botão secundário: direciona para o contato/ajuda sobre o produto */}
                <Link 
                    to="/contato" 
                    className="btn btn-outline-secondary btn-lg mx-2"
                >
                    Fale com Nossos Especialistas 🐴
                </Link>
            </div>

            {/* Rodapé simples adaptado para o tema Rodeio */}
            <p className="mt-5 text-muted">Tradição e qualidade que te levam ao pódio.</p>
        </div>
        </>
    );
}

export default Principal;
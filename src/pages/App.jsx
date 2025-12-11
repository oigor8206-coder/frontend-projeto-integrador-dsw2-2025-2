import React from 'react';
import { Link } from 'react-router-dom';

const Principal = () => {
    return (
        <>  
        <div 
            className="container my-5 text-center p-5 rounded shadow"
            style={{
                background: '#fff7ec',
                border: '2px solid #8B4513',
                maxWidth: '900px'
            }}
        >
            {/* TÍTULO PRINCIPAL */}
            <h1 
                className="mb-4"
                style={{
                    color: '#8B4513',
                    fontSize: '3.2rem',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: '2px 2px #d1b590'
                }}
            >
                🤠 Laço Eterno 🌾
            </h1>

            {/* SUBTÍTULO */}
            <p 
                className="lead mb-5"
                style={{
                    color: '#5c4033',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                }}
            >
                Precisão, resistência e tradição para quem vive o espírito do campo.
            </p>

            {/* IMAGEM PRINCIPAL */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <img 
                        src="laco.jpg"
                        className="img-fluid shadow"
                        alt="Laço de rodeio profissional"
                        style={{
                            borderRadius: '20px',
                            border: '4px solid #8B4513',
                            maxHeight: '420px',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>

            {/* BOTÕES */}
            <div className="mt-4">

                <Link 
                    to="/encomendas" 
                    className="btn btn-lg text-white mx-2 px-4"
                    style={{
                        backgroundColor: '#8B4513',
                        borderColor: '#8B4513',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        borderRadius: '10px',
                        padding: '12px 25px'
                    }}
                >
                    Ver Laços e Cordas Profissionais 🎯
                </Link>

                <Link 
                    to="/contato" 
                    className="btn btn-outline-secondary btn-lg mx-2 px-4"
                    style={{
                        borderColor: '#8B4513',
                        color: '#8B4513',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        borderRadius: '10px',
                        padding: '12px 25px'
                    }}
                >
                    Fale com Nossos Especialistas 🐴
                </Link>
            </div>

            {/* RODAPÉ */}
            <p 
                className="mt-5"
                style={{
                    color: '#8B4513',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                }}
            >
                Tradição e qualidade que te levam ao pódio.
            </p>
        </div>
        </>
    );
}

export default Principal;

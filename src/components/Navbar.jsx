import React from 'react'
import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton'

const Navbar = () => {
    return (
        <nav 
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: '#fff5e1',
                borderBottom: '3px solid #8B4513',
                padding: '12px 20px'
            }}
        >
            <div className="container-fluid">

                {/* Nome da marca — Laço Eterno */}
                <Link 
                    className="navbar-brand"
                    to="/"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.6rem',
                        color: '#8B4513',
                        letterSpacing: '1px',
                        fontFamily: 'Georgia, serif'
                    }}
                >
                    Laço Eterno
                </Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" style={linkStyle} to="/sobre">Sobre</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" style={linkStyle} to="/contato">Contato</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" style={linkStyle} to="/encomendas">
                                Lista de Encomendas
                            </Link>
                        </li>

                    </ul>

                    <ThemeButton />
                </div>
            </div>
        </nav>
    )
}

// Estilo dos links
const linkStyle = {
    color: '#5c4033',
    fontSize: '1.1rem',
    fontWeight: '500'
}

export default Navbar

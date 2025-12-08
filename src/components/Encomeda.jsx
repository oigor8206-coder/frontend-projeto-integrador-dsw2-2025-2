import React from 'react';

const Encomeda = ({ encomenda, onDelete }) => {
  return (
    <div className='col-6'>
      <div className="card">
        <img src="laco.jpg" width={500} alt="..." />
        <div className="card-body">
          <h5 className="card-title"><strong>{encomenda.id}</strong></h5>
          <h5 className="card-title"><strong>{encomenda.nomeCliente}</strong></h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{encomenda.material}</li>
          <li className="list-group-item">{encomenda.cor}</li>
          <li className="list-group-item">{encomenda.chumbo}</li>
          <li className="list-group-item">{encomenda.pesoLaco}</li>

         


        </ul>
        <div className="card-footer text-body-secondary">
          <button 
            className='btn btn-danger'
            onClick={() => onDelete(encomenda.id)}  // Chama a função 'onDelete' passando o 'id' da encomenda
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}

export default Encomeda;

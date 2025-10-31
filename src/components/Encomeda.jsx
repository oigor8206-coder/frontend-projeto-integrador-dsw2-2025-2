import React from 'react'

 const Encomeda = ({ encomenda }) => {
  return (
    <div className='col-6 '>
      {encomenda.id} - {encomenda.material} - {encomenda.cor}
      <div class="card">
        <img src="laco.jpg" width={500} alt="..."/>
          <div class="card-body">
            <h5 class="card-title"><strong>{encomenda.id}</strong></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{encomenda.material}</li>
            <li class="list-group-item">{encomenda.cor}</li>
          </ul>
          <div class="card-footer text-body-secondary">
            <button class='btn btn-segundary'>inicio</button>
            <button className='btn btn-info'>editar</button>
            <button className='btn btn-danger'>excluir</button>
          </div>
      </div>
    </div>

  )
}
export default Encomeda
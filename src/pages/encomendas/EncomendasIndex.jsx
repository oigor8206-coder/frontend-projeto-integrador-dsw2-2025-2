import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Encomenda from '../../components/Encomeda';

const EncomendasIndex = () => {
  // Dados simulados de Produtos (Laços) para a galeria
  const [encomendas, setencomendas] = React.useState([]);


//crio um useEffect serve para fazer consultas em APIS 
// ele naoo roda de imediato so roda depois da primeira pintura 
useEffect( () => {  
  //dentro do useEffect crio uma função abaixo e declaro ela como async
  // declaramos ela como async pois iremos utilizar o await dentro dela
 const fetchEncomendas =  async  () => {
  const response = await fetch("http://localhost:3000/api/encomendas");
  //console.log(response)
  const data = await response.json(); // converto os dados para dentro de um json
  console.log(data);
  setencomendas(data); // atualizo o estado com os dados obtidos da API
}
  fetchEncomendas(); // chamando a função que foi declarada acima
}, []); // [] significa que o useEffect será executado apenas 1 vez
        // depois do primiro render
  return (

    <div>
      { <Navbar /> }
      <h3>Encomendas</h3>
      <Link to = "/encomendas/create" className='btn btn-primary'>Nova Encomenda</Link>
      <div className='row'>
      {encomendas.map(encomenda => <Encomenda key = {encomenda.id} encomenda={encomenda}/>)}
      </div>
    
      </div>
  );
}
export default EncomendasIndex;
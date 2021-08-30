import React, { createContext,useState } from 'react';
import Produtos from '../../src/products.json';

export const Context = createContext({});

 export const AuthProvider = (props) =>
 {
  const [itemsCarrinho,setItemsCarrinho] = useState([]);
  const [itemsCheckout,setItemsCheckout] = useState([]);
  const [qtdItemsCarrinho,setQtdItemsCarrinho] = useState(0);
  const [caminhoDetalhes,setCaminhoDetalhes]=useState(false);
  const [data,setData] = useState(Produtos);
  const [jogoDetalhes,setJogoDetalhes] =useState();
  const capas ={};
 
  function importAll(r,capas) 
  {
   r.keys().forEach((key) =>(capas[key] = r(key)));
  }


  importAll(require.context('../../src/capasJogos', true, /\.png$/),capas);
 
  return(
        <Context.Provider 
        value={
        {Produtos,
         data,
         setData,
         capas,
         itemsCarrinho,
         setItemsCarrinho,
         qtdItemsCarrinho,
         setQtdItemsCarrinho,
         itemsCheckout,
         setItemsCheckout,
         caminhoDetalhes,
         setCaminhoDetalhes,
         jogoDetalhes,
         setJogoDetalhes
         }}>
          {props.children}
        </Context.Provider>
     )
 }

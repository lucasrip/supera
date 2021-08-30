import React, { useState, useContext} from "react";
import { toast } from 'react-toastify';
import { Context } from "../../context/Auth";

import { Link } from "react-router-dom";
import {GiConfirmed} from 'react-icons/gi';
import {FiPlus} from 'react-icons/fi';
 
import './style.css';

export default function CardJogo(props)
{
 const {setQtdItemsCarrinho,itemsCarrinho,setItemsCarrinho,itemsCheckout,setItemsCheckout,setCaminhoDetalhes,setJogoDetalhes} = useContext(Context);
 const [addNoCarrinho , setAddNoCarrinho] =useState(false);
 
 const{id,name,price,score,capaJogo,image}=props.detalheJogo;
 function mostradAdd()
 {
  const haJogoCarrinho =itemsCarrinho.filter((item)=>item.detalheJogo.id === id);

   if(addNoCarrinho === false && haJogoCarrinho.length === 0)
   {
     toast.info(<strong className="msgRemovido"><GiConfirmed color="white" sixe={25}/> Jogo adicionado no carrinho </strong>);
     setItemsCheckout([...itemsCheckout,{id,name,price,score,image,capaJogo,qtd:1}])
     setQtdItemsCarrinho((prevCout)=>prevCout+1);
     setAddNoCarrinho(true);
     setItemsCarrinho([...itemsCarrinho,{...props}]);
   }
   else
   {
     toast.error('O Jogo ja esta no carrinho');
   }
 }
    return(
        <div className="cardJogo" >
           <strong className="score">{score}</strong>
             <div className="capaComprar" onClick={()=>mostradAdd()}></div>
            
           <img src={capaJogo} alt={`capa do jogo ${name}`} loading="lazy" />
            <strong>{name}</strong>
            <div>
                <span>
                <Link to="/detalhes" className="maisDetalhes" onClick={()=>
                   {
                     setCaminhoDetalhes(true);
                     setJogoDetalhes({id,name,price,score,capaJogo,image});
                   }}>
                 <FiPlus size={20} />
                  Detalhes
                 </Link>
                </span>
                <span>
                 <strong>
                  Preço
                 </strong>
                  <p>R$ {price}</p>
                </span> 
            </div>
            
        </div>
    )
}

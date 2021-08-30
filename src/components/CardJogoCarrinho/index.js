import React,{useState,useContext, useCallback, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FiTrash2,FiPlus,FiMinus} from 'react-icons/fi';
import './style.css';
import { Context } from '../../context/Auth';

export default function CardJogoCarrinho(props)
{
 const {itemsCarrinho, setItemsCarrinho,setQtdItemsCarrinho,itemsCheckout,setItemsCheckout} = useContext(Context);
 const [qtdJogo,setQtdJogo] = useState(1);  
 const {id,name,price,score,capaJogo} = props.detalhes.detalheJogo;
 
      


     
             
        const Removido=useCallback(()=>{
        const jogoRemovido =itemsCarrinho.filter((item)=>item.detalheJogo.id !== id)
        const jogoRemovidoCheckout = itemsCheckout.filter((item)=>item.id !== id)

         setQtdItemsCarrinho((prevCout)=>prevCout-1)
         setItemsCarrinho(()=>[ ...jogoRemovido])
         setItemsCheckout(()=>[...jogoRemovidoCheckout])
        
        },[itemsCarrinho,setQtdItemsCarrinho,setItemsCarrinho,id,itemsCheckout,setItemsCheckout])
        
        useEffect(()=>
        {
          
           
              const jogosCheckout = itemsCheckout.map((item)=>item.id === id?{...item,qtd:qtdJogo}:item);
              setItemsCheckout(()=>[...jogosCheckout]);
           
         
        },[qtdJogo,id,itemsCheckout,setItemsCheckout]) 
       
 
    return(
        <div className="jogoNoCarrinho">
            <img src={capaJogo} alt={'capa do jogo '+name} loading="lazy" /> 
            <div className="descricao"> 
                <div>  
                 <strong>{name}</strong>
                  <div> 
                   <span>
                      <strong>score</strong>
                      <p>{score}</p>
                   </span>
                   <span>
                      <strong>Preço</strong>
                      <p>R$ {price}</p>
                   </span>
                  </div>
                </div>
                <div className="opcoes">
                  <div>
                    <FiMinus size={25} onClick={()=>setQtdJogo((previous)=>previous>1?previous-1:qtdJogo)}/>
                     <input type="text" value={qtdJogo} readOnly/>
                    <FiPlus size={25} onClick={()=>setQtdJogo((previous)=>previous+1)}/>
                  </div>
                  <Link to="#" onClick={()=>Removido()}>
                    <FiTrash2 size={15}/>
                    Remover
                  </Link>
                </div>
            </div>
        </div>
    )
}
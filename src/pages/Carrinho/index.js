import React,{useContext, useState, useEffect} from 'react';
import CardJogoCarrinho from '../../components/CardJogoCarrinho';
import { Context } from '../../context/Auth';
import {FiTruck} from 'react-icons/fi';
import {GiConfirmed} from 'react-icons/gi';
import { toast } from 'react-toastify';
import './style.css';

export default function Carrinho()
{
    const {itemsCarrinho,itemsCheckout} = useContext(Context);
    const [carrinho ,setCarrinho] = useState();
    const [checkout,setCheckout] =useState();
    
    const [frete,setFrete] = useState();
    const [subTotal,setSubTotal] = useState();
    const [total,setTotal] = useState();
 
    function comprar()
    {
     toast.success(()=><strong><GiConfirmed size={25} colocar="#ffff" />Compra Realizada com Sucesso</strong>,
     { 
       className: 'toastCompra',
       bodyClassName: "toastCompra",
    });
    }
    useEffect(()=>{
      const renderizaCarrinho =itemsCarrinho.map((item) =><CardJogoCarrinho  detalhes={item} key={item.detalheJogo.id}/> )
       setCarrinho(renderizaCarrinho)
     },[itemsCarrinho])
 
     useEffect(()=>{
       const renderizaCheckout=itemsCheckout.map((item)=>
       {  
         
         return(
          
                <div key={item.id}>
                 <span>
                    <strong>{item.name}</strong>
                    <p> {`R$${item.price}`}</p>
                 </span>
                </div>
               )
        })
        setCheckout(renderizaCheckout)
       
        if(itemsCheckout.length>0)
        {
        const calculaFrete = itemsCheckout.map(item=>item.qtd *10)
        const calculaFreteFinal = calculaFrete.reduce((total,num)=>total + num)
        setFrete(calculaFreteFinal)
        
        const calculaSubTotal =itemsCheckout.map(item =>item.price * item.qtd)
        const calculaSubTotalFinal =calculaSubTotal.reduce((total,num)=>total + num)
        setSubTotal(calculaSubTotalFinal)
        
        const calculaTotal = subTotal>=250?subTotal:(subTotal+frete).toFixed(2);
        setTotal(calculaTotal)
        }
       


     },[itemsCheckout,frete,subTotal])
  

   return(
       <div className="carrinhoContainer">
         <div className={
             itemsCarrinho.length > 0?'jogosAdicionados':
             'nadaAdicionado'
            }>
          {
            itemsCarrinho.length > 0?<div>  {carrinho} </div>:<strong> Nada Foi Adicionado no carrinho ainda</strong> 
          }
         </div>
          <div className="calculoCompra">
                   {checkout}
            
            {  itemsCheckout.length>0&&
                 <div className="valoresCompra">
              <span>
                <span><strong>SubTotal </strong>{subTotal?subTotal.toFixed(2):''}</span>
                <span><strong>Frete </strong>{subTotal>=250?<span>Gratis</span>:` ${frete}`}</span>
              </span>
              <span>
               <strong>{`Total R$${total}`}</strong>
              </span> 
               <button className="btnComprar" type="button" onClick={()=>comprar()}>
                 <FiTruck size={20} color="#ffff"/>
                 Comprar</button>
             </div>
            }
            
            
            </div>
         </div>
   )
   
}



import React,{useContext,useState,useEffect} from 'react';
import './style.css';
import {Context} from '../../context/Auth';
import CardJogo from '../../components/CardJogo';
import 'react-toastify/dist/ReactToastify.min.css';
 
export default function Home()
{
  const {Produtos,data,setData,capas} = useContext(Context)
  const [ordenaJogo,setOrdenaJogo]= useState('');
  const [home,setHome] =useState();

  useEffect(()=>{
  
   function ordenaProdutos()
   {
     
    if(ordenaJogo === 'menorPreco' || ordenaJogo === 'menorScore'||ordenaJogo === 'alfabetico')
    {
      const tipoOrdenaJogo =ordenaJogo === 'menorPreco'?'price':ordenaJogo ==='score'?'score':'name';
         const ordenaMenor =  data.sort((item,proximoItem)=>{
         if(item[tipoOrdenaJogo] < proximoItem[tipoOrdenaJogo])return -1
         if(item[tipoOrdenaJogo] > proximoItem[tipoOrdenaJogo])return 1
         return 0
         })
         setData([...ordenaMenor])   
         return
    }
    if(ordenaJogo === 'maiorPreco' || ordenaJogo === 'maiorScore')
    {
      const tipoOrdenaJogo =ordenaJogo === 'maiorPreco'?'price':'score'
         const ordenaMaior =  data.sort((item,proximoItem)=>{
         if(item[tipoOrdenaJogo] < proximoItem[tipoOrdenaJogo])return 1
         if(item[tipoOrdenaJogo] > proximoItem[tipoOrdenaJogo])return -1
         return 0
         })
         setData([...ordenaMaior])
         return   
    }

    if(ordenaJogo === 'alfabetico')
    {
      const alfabetico = data.sort();
      setData([...alfabetico])
      return
    }

    if(ordenaJogo === 'padrao')
    {
      setData([...Produtos])
      return
    }
   } 
   ordenaProdutos()

  },[ordenaJogo,Produtos,data,setData])

  useEffect(()=>{
    const renderizaJogosHome =data.map((item)=>{
      const capaJogo = capas['./'+item.image].default;
        return(
         <div key={item.id}>
          <CardJogo  detalheJogo={{...item,capaJogo}}  />
         </div>  
        )
    })
    setHome(renderizaJogosHome)
  },[data,Produtos,capas])
   
     return(
        <div className="homeContainer">

            <h1>Jogos do momento +</h1>

            <div className="ordernar">
              <select onChange={(option)=>setOrdenaJogo(option.target.value) } defaultValue='padrao'>
                <option  label="Ordenar" type="hidden" value={'padrao'} disabled/>
                <optgroup label="Preço">
                  <option  value="menorPreco">
                    Menor preço
                  </option>
                  <option value="maiorPreco">
                    Maior preço
                  </option>
                </optgroup>
                <optgroup label="Score">
                  <option value="menorScore">
                    Menor score
                  </option>
                  <option value="maiorScore">
                    Maior score
                  </option>
                </optgroup>
                <optgroup label="Outros">
                  <option value="alfabetico">
                    Ordem alfabetica
                  </option>
                  <option value="padrao">
                    Padrao
                  </option>
                </optgroup>
              
              </select>

            </div>

          <div className="jogosContainer">
          {home}
          </div>
        </div>
    )
}

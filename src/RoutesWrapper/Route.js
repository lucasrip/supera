import {Route,Redirect} from 'react-router-dom';
import React,{useContext} from 'react';
import { Context } from '../context/Auth';

export default function RouteWrapper({
    component:Component,
    isPrivate,
    ...rest
})
{
const{caminhoDetalhes} = useContext(Context);
console.log(caminhoDetalhes)

if(caminhoDetalhes === false && isPrivate === true)
{
 return <Redirect to="/"/>
}

  return(
      <Route {...rest}
      render={props=>(
          <Component {...props} />
      )}
      />
  )
}
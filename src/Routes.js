import React from 'react';
import {Switch} from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';
import Route from './RoutesWrapper/Route';


export default function Routes()
{
    return(
        <Switch>
         <Route exact  path="/" component={Home} />
         <Route exact  path="/carrinho" component={Carrinho} />
         <Route  exact  path="/detalhes" component={Detalhes} isPrivate />
        </Switch>
    )
}

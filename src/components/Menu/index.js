import React,{useContext} from "react";
import './style.css';
import Logo from '../../logo/logo.png';
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Context} from '../../context/Auth';

export default function Menu()
{
 const {qtdItemsCarrinho} = useContext(Context);

    return(
        <header className="menuContainer">
                <Link to='/'>
                  <img src={Logo} alt="logo do site de gamer" />
                </Link>

              <Link className="iconeCarrinho" to="/carrinho">
                   <span><p>{qtdItemsCarrinho}</p></span>
                   <FiShoppingCart size={55}/>
              </Link>
       
        </header>
    )
}
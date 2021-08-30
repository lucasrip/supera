import React from 'react';
import './index.css';
import Header from './components/Menu';
import Routes from './Routes';
import {AuthProvider} from './context/Auth';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
       <Header/>
        <Routes/>
       <Footer/>
      </BrowserRouter>
      <ToastContainer 
       position="top-center" 
       autoClose={2000}  
      />
   </AuthProvider>
  );
}

export default App;

import React, { Component } from 'react';
import '../Estilos/Universal.css';
import '../Estilos/Menu.css';
import  Menuenbarra from '../components/Menuenbarra';
import {Link} from 'react-router-dom'; 

class Menú extends Component {
    
    render() { 
        return ( 
          <>
          <h1>Menú</h1>

<Menuenbarra/>


    
  </>
         );
    }
}
 
export default Menú;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';


class unitecClass extends Component{

  constructor(props){
    super(props)
    this.state={
      
    }
  }

    render(){
        return(
            <div>
            <h1>Laboratorio 4 UX</h1>
            <form onSubmit={this.handleSubmit}>
            <p>
            <Input type='text' placeholder='Nombre de Clase' name='clase1'/>
           <button>
           Continuar
           </button> 
            </p>
            </form>             
            </div>

        );
    }
    
}

export default unitecClass;
import { StepLabel, Stepper } from '@material-ui/core';
import React, { useState  , useEffect} from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import {Container , Typography} from '@material-ui/core'
import Step from '@material-ui/core/Step'
export default  function Formulario ({aoEnviar}){
    const [etapa , setEtapa] = useState(0);
    const [dadosColetados , setDados] = useState({});
    useEffect(()=>{
        if (etapa === formulario.length - 1)
        aoEnviar(dadosColetados)
        console.log(dadosColetados)
    })
    const formulario  =  [
        <DadosPessoais aoEnviar ={coletaDados}></DadosPessoais>,
        <DadosUsuario aoEnviar = {coletaDados} ></DadosUsuario>,
        <DadosEntrega aoEnviar ={coletaDados}></DadosEntrega> ,
        <Typography variant="h5" >Até mais seu trouxa</Typography>
    ]
    function proximaEtapa (){

        setEtapa(etapa + 1);
    }
    function coletaDados (dados){
      
     setDados({...dadosColetados ,...dados});
      proximaEtapa()
    }

    
    return (
        <>
             <Stepper activeStep={etapa}>
                 <Step> <StepLabel>Pessoais</StepLabel></Step>
                 <Step> <StepLabel> Usuario</StepLabel></Step>
                 <Step><StepLabel> Endereco</StepLabel></Step>
                 <Step><StepLabel> Finalizar</StepLabel></Step>
             </Stepper>
              {formulario[etapa]}
        </>
         
         )
}
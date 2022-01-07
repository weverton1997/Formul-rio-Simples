import React from 'react'
import Formulario from './Components/Formulario';
import {Container , Typography} from '@material-ui/core'

function App() {
  return (
    <Container component="article" maxWidth ="sm">
       <Typography variant="h3" align="center" component="h1" > Formulario</Typography>
       <Formulario aoEnviar = {EnviarForm}/>
    </Container>
  );
}

function EnviarForm ( dados){
  console.log(dados)
}
export default App;

import React , {useState} from 'react'
import {Button , TextField } from '@material-ui/core'

export default function DadosUsuario({aoEnviar}) {
    const [email , setEmail]  = useState();
    const [senha , setSenha]  = useState();

    return (
        <form onSubmit = {(evento) =>{
            evento.preventDefault();
            aoEnviar({email  , senha});
          }}>
            <TextField id="Email" required
                value ={email} onChange = {(evento) =>{
                    setEmail(evento.target.value)
                }}
                label="Email" variant="outlined" margin="normal"
                type = "email"
                fullWidth />

            <TextField type ="password" id="senha" 
                value = {senha}
                label="senha" required onChange = {(evento) =>{
                    setSenha(evento.target.value)
                }}
                variant="outlined" margin="normal" fullWidth
                 />
            <Button variant="contained" type="submit" color="primary">Proximo</Button>
          </form> 
        
        )
}
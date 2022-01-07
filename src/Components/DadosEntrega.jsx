import React , {useState} from 'react'
import {Button , TextField } from '@material-ui/core'

export default function DadosEntrega({aoEnviar}) {
    const [cep , setCep] = useState("");
    const [endereco , setEndereco] = useState("");
    const [numero  , setNumero] = useState("");
    const [cidade , setCidade] = useState("");
    const [estado  , setEstado] = useState("");
    return (

        <form onSubmit ={(evento) =>{
            evento.preventDefault();
            aoEnviar({cep  , endereco  , numero  , cidade , estado})
        }}>

            <TextField id="cep"
                value ={cep} onChange ={(evento) =>{
                    setCep(evento.target.value)
                }}
                label="cep" variant="outlined" margin="normal"
                type="number" required
                fullWidth />
            
            <TextField id="endereco"
                value  ={endereco} onChange ={(evento) =>{
                    setEndereco(evento.target.value)
                }}
                label="endereco" variant="outlined" margin="normal"
                type="text"
                fullWidth 
                required/>

            <TextField id="numero"
                value  = {numero} onChange ={(evento) =>{
                    setNumero(evento.target.value)
                }}
                label="numero" variant="outlined" margin="normal"
                type="number"
                required
                />

            <TextField id="cidade"
                value ={cidade} onChange ={(evento) =>{
                    setCidade(evento.target.value)
                }}
                label="cidade" variant="outlined" margin="normal"
                type="text" required
                 />

            <TextField id="estado"
                value ={estado} onChange ={(evento) =>{
                    setEstado(evento.target.value)
                }}
                label="estado" variant="outlined" margin="normal"
                type="text" required
                />
             
             <Button variant="contained" type="submit" color="primary" fullWidth>Finalizar</Button>
        </form>
    )

}
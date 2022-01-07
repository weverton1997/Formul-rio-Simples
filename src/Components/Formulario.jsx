import React , {useState} from 'react'
import {Button , TextField , FormControlLabel , Switch} from '@material-ui/core'

export default  function Formulario ({aoEnviar}){

    const [nome  , setNome] = useState("Maira do bairro");
    const [sobrenome  , setSobrenome] = useState("");
    const [cpf , setCpf ]  = useState("");
    const [promocoes  , setPromocoes] = useState(true);
    const [novidades , setNovidades] = useState(false);
    const [erros , setErros] = useState({cpf : { valido : true , texto : ""}});
    return (
        <form onSubmit  = {evento =>{
            evento.preventDefault()
            aoEnviar({nome  , sobrenome  , cpf  , promocoes  , novidades} )
        }}>
            <TextField id="nome" value ={nome}
                label="nome" variant="outlined" margin="normal"
                onChange={event =>setNome(event.target.value)}
                fullWidth />

            <TextField id="Sobrenome"  valor = {sobrenome}
                label="sobrenome"
                variant="outlined" margin="normal" fullWidth
                onChange={event =>setSobrenome(event.target.value)} />

            <TextField id="cpf" label="cpf" valor = {cpf}
                onBlur={evento =>{
                    setErros({cpf : {valido : false  , texto : "Cpf tem que ter 11 digitos"}})
                }}
                variant="outlined" margin="normal" fullWidth 
                onChange={event =>setCpf(event.target.value)} 
                error = {!erros.cpf.valido}
                helperText = {erros.cpf.texto}
                />

            <FormControlLabel label="Promocoes" 
                control={<Switch  checked ={promocoes}
                name="Promoções"  onChange = {evento => setPromocoes(evento.target.checked)}
                color="primary" />} />
            <FormControlLabel label="Novidades"
                control={<Switch onChange = {evento => setNovidades(evento.target.checked)} 
                name="Novidades" checked ={novidades}
                color="secondary" />} />

            <Button variant="contained" type="submit" color="primary">Cadastra</Button>
        </form>
    )
}
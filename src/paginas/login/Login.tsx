import React, { useState, useEffect, ChangeEvent } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/Service'
import UserLogin from '../../models/UserLogin'
import User from '../../models/User'
import { useDispatch } from 'react-redux'
import { addId, addToken } from '../../store/token/Actions'
import './Login.css'

function Login() {
    let navigate = useNavigate()

    const dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            usuario: '',
            senha: ''
        }
    )

    const [respUser, setRespUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (respUser.token !== '') {
            dispatch(addToken(respUser.token))
            dispatch(addId(respUser.id.toString()))
            navigate('/home')
        }
    }, [respUser.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setRespUser)

            alert('Usuário logado com sucesso!')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login
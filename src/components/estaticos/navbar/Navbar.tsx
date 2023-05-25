import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UserState } from '../../../store/token/Reducer'
import { addToken } from '../../../store/token/Actions'
import MenuLogin from '../menuLogin/MenuLogin'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css'

function Navbar() {
    let navigate = useNavigate()

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const userId = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    var navbarComponent

    if (token !== '') {
        navbarComponent = (
            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" className='toolbar'>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent='space-evenly' sx={{ width: '30vw' }}>
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <MenuLogin />
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar

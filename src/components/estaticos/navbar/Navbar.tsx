import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar id='navbar' position="static">
                <Toolbar>
                    <Box id='toolbar-icone'>
                        <Link to="/home" id='toolbar-icone-link' className='link'>
                            <img height='80%' src="src\assets\images\icone.png" alt="Ícone" />
                        </Link>
                    </Box>
                    <Box id='toolbar-menu'>
                        <Link to="/home" className='link'>
                            <Typography variant='h6'>
                                Home
                            </Typography>
                        </Link>
                        <hr />
                        <Typography variant='h6'>
                            Postagens
                        </Typography>
                        <hr />
                        <Typography variant='h6'>
                            Temas
                        </Typography>
                        <hr />
                        <Typography variant='h6'>
                            Sobre
                        </Typography>
                    </Box>
                    <Box id='toolbar-login'>
                        <Link to='/login' id='toolbar-login-link' className='link'>
                            <Button color='inherit'>
                                Login
                                <AccountCircleIcon id='toolbar-login-icone' />
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
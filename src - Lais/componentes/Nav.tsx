import React from 'react'
import { Grid } from '@material-ui/core'
import './Nav.css'

function Nav() {
  return (
    <>
      <Grid item id='icone' md={4}>
        <img id='icone-img' src="src\assets\images\icone.png" alt="Logo do Blog Pessoal" />
      </Grid>
      <Grid item id='menu' md={4}>
        <p className='menu-itens'>Home</p>
        <img className='barra-vertical' src="src\assets\images\barra-vertical.png" />
        <p className='menu-itens'>Postagens</p>
        <img className='barra-vertical' src="src\assets\images\barra-vertical.png" />
        <p className='menu-itens'>Temas</p>
        <img className='barra-vertical' src="src\assets\images\barra-vertical.png" />
        <p className='menu-itens'>Sobre</p>
      </Grid>
      <Grid item id='login' md={4}>
        <p id='login-texto'>Login</p>
        <img id='login-img' src="src\assets\images\login.png" alt="Imagem de Login" />
      </Grid>
    </>
  )
}

export default Nav
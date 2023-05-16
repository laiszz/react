import React from 'react'
import './Postagem.css'
import { Grid, Button } from '@material-ui/core'

function Postagem() {
    return (
        <>
            <Grid item className='postagem'>
                <img src="src\assets\images\physics.jpg" alt="Física!" />
                <p id='postagem-titulo'>Título</p>
                <p id='postagem-texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos cumque libero, corporis minus velit facilis aperiam.</p>
            </Grid>
        </>
    )
}

export default Postagem
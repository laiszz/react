import React from 'react'
import { Grid } from '@material-ui/core'
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid item container id='sobre' md={6}>
                <p>Desenvolvido por:</p>
                <p>Laís Sales Xavier</p>
                <div id='sobre-icones'>
                    <img src="src\assets\images\linkedin-icon.png" alt="" />
                    <img src="src\assets\images\github-icon.png" alt="" />
                    <img src="src\assets\images\instagram-icon.png" alt="" />
                </div>
            </Grid>
            <Grid item container id='foto' md={6}>
                <img src="src\assets\images\lais.png" alt="" />
            </Grid>
        </>
    )
}

export default Footer
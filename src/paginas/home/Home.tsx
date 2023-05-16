import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import Carrossel from '../../components/carrossel/Carrossel'
import './Home.css'

function Home() {
    return (
        <>
            {/* <Grid container id='home'>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h3">
                            Seja muito bem vinde!
                        </Typography>
                        <Typography variant="h5">
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined">
                            Ver Postagens
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt='' />
                </Grid>
            </Grid> */}
            <Grid container>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>
        </>
    )
}

export default Home
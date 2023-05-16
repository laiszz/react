import React from 'react'
import { Grid } from '@material-ui/core'
import Nav from './componentes/Nav'
import Main from './componentes/Main'
import Footer from './componentes/Footer'
import './App.css'

function App() {
  return (
    <>
      <Grid container>
        <Grid item container id='nav' spacing={2}>
          <Nav />
        </Grid>
        <Grid item container id='main' spacing={8} direction='row' justifyContent='flex-start' alignItems='flex-start'>
          <Main />
        </Grid>
        <Grid item container id='footer' spacing={2}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default App

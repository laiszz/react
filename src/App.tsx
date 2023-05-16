import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Rota principal, que abrirá primeiro sempre */}
          <Route path="/" element={<Login />} />
          {/* Outras rotas */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
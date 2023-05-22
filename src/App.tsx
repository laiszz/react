import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
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
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
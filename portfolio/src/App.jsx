import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { Servicio } from './components/Servicio'
import '../src/css/style.css'
import '../src/css/bootstrap.min.css'
import '../src/css/jquery.bxslider.css'
import { Proyectos } from './components/Proyectos'
import { PreFooter } from './components/PreFooter'
import { Footer } from './components/Footer'
function App() {


  return (
    <>
      <main >
        <Header />
        <Inicio />
        <Servicio />
        <Proyectos />
        <PreFooter />
        <Footer/>
      </main >

    </>
  )
}

export default App

import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import './App.css'
import Main from './Components/Main/Main'
import { Route, Routes } from 'react-router-dom'
// import express from 'express';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
//Ketan Raj
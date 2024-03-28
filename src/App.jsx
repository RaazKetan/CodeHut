import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import './App.css'
import Main from './Components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import TodaysNews from './Components/HotPage/TodayNews'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/checkstats" element={<Main />} />
        <Route path="/todaynews" element={<TodaysNews />} />
        
      </Routes>
    </>
  )
}

export default App
//Ketan Raj
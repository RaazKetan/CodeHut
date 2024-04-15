import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import './App.css'
import Main from './Components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import GitCalender from './Components/HotPage/GitCalender'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/checkstats" element={<Main />} />
        <Route path="/gitcalender" element={<GitCalender />} />
        
      </Routes>
    </>
  )
}

export default App
//Ketan Raj
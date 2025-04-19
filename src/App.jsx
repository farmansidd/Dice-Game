import { useState } from 'react'
import HeroSection from './Components/HeroSection'
import Gameplay from './Components/Gameplay'
import './App.css'



function App() {
  const [isGameStart, setisGameStart] = useState(false);
   const toggleGamePaly = () => {
    setisGameStart((prev) => !prev);
   }
  return (
    <>
{
 isGameStart ? <Gameplay toggle={toggleGamePaly} /> : <HeroSection
  toggle={toggleGamePaly}/>
}   
 </>
  )
}

export default App

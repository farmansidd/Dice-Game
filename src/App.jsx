import { useState } from 'react'
import styled from 'styled-components'
import HeroSection from './Components/HeroSection'
import Gameplay from './Components/Gameplay'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  
  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  }
  
  return (
    <AppContainer>
      {isGameStart ? 
        <Gameplay toggle={toggleGamePlay} /> : 
        <HeroSection toggle={toggleGamePlay} />
      }
    </AppContainer>
  )
}

export default App
import './App.css'

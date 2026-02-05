import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Singlepageapp from './components/Spa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Singlepageapp/>
    </>
  )
}

export default App

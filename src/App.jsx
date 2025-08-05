import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Components/ThemeProvider'
import { Page } from './Components/Page'
import { ThemeToggleButton } from './Components/ThemeToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="main">

      <ThemeProvider>
        <Page/>
        <ThemeToggleButton/>
      </ThemeProvider>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-800 text-black p-5 rounded-xl'>hello</h1><br />
      <Card username="alitayyab"  /><br />
      <Card username="hamjza" />
      <Card />
    </>
  )
}

export default App

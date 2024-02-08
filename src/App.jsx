import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Form em React</h1>
        <MyForm userName="Alex" userEmail="alex.gb5@hotmail.com"/>
      </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Button } from '@arco-design/web-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button type="primary">hello arco</Button>
    </div>
  )
}

export default App

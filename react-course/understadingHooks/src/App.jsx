import { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)

  const increase = () => {
    setNum(num+1)
  }

  const decrease = () => {
    setNum(num-1)
  }

  return (
    <>
      <h1>Value of num is: {num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App

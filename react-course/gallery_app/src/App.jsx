import { useState } from 'react'
import HomePage from './pages/homePage'

function App() {

  const [data, getData] = useState('')

  return (
    
    <>
      <div className='h-screen bg-black flex items-center justify-center'>
        {/* <button 
          className='bg-gray-500
            text-white 
            px-4 
            py-2 
            rounded
            hover:bg-gray-600 
            hover:text-gray-200 
            active:bg-gray-700 
            active:text-gray-300 
            active:scale-95 
            transition'>
          get data
        </button> */}

        <HomePage/>


      </div>
    </>
  )
}

export default App

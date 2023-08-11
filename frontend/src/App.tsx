import { useEffect, useState } from 'react'
import { getGreeting } from './api'
import './App.css'

function App () {
  const [message, setMessage] = useState<string|null>(null)

  useEffect(() => {
    setTimeout(async () => {
      const result = await getGreeting()

      setMessage(result.message)
    }, 500)
  })

  return (
    <>
      <h1>Fullstack Typescript Example</h1>
      <div className='content'>
        {message !== null
          ? <div className='code message'>{JSON.stringify({ message }, null)}</div>
          : <div className='code'>Loading server response...</div>
        }
        <br/>
        The following type is shared between the frontend and backend:<br/><br/>
        <div className='code type'>{'type Greeting = {\n  message: string\n}'}
        </div>
      </div>
    </>
  )
}

export default App

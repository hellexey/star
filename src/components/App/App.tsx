import React, { useState } from 'react'
interface Person {
  name: string
  height: string
  mass: string
}
const App: React.FC = () => {
  const [data, setData] = useState<Person | null>(null)

  const getResource = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
  }

  const handleClick = () => {
    getResource('https://swapi.dev/api/people/1')
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
        </div>
      )}
    </div>
  )
}

export default App

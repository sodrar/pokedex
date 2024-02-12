import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokes = async () => {
      const reponse = await fetch("https://pokebuildapi.fr/api/v1/pokemon")
      const jsonPokes = await reponse.json()
      setPokemons(jsonPokes)
      console.log(jsonPokes)
    }
    fetchPokes()
  },[])
  
  return (
    <>
      <h1>Test</h1>
    </>
  )
}

export default App

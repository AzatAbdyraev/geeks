import axios from 'axios';
import {useState, useEffect} from 'react'

function CardPokemon({pokemon, int}) {  

  // console.log(pokemon);
  const [imag, setImag] = useState('')

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => axios.get(res.data.results[int].url))
      .then(res => res.data.sprites.front_default)
      .then(res => setImag(res))
  }, [])
  

  return (
    <div className='card'>
      <p>{pokemon.name}</p>
      <img src={imag} className='pokemonImg' alt='' />
    </div>
  )
}

export default CardPokemon
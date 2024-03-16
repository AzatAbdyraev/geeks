import { useState, useEffect } from "react";
import axios from 'axios';
import CardPokemon from "./Components/CardPokemon.jsx";


function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.data.results)
      .then(data => setPokemons(data))
  }, [])

  
  

  return (
    <div className="Main">
      {
        pokemons.map((p, i) => {
          return <CardPokemon pokemon={p} int={i}/>
        })
      }
    </div>
  );
}

export default App;

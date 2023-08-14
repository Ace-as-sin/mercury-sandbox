import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeballAnimation from "./components/PokeballAnimation.jsx";
import PokemonDisplay from "./components/PokemonDisplay.jsx"

import './App.scss';

const App = () => {
  const [pokemonList, setPokemonList] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`)
  const [nextUrl, setNextUrl] = useState(null)
  useEffect(() => {
    navigate(currentUrl)
  }, []);

  const navigate = (url) => {
    setPokemonList(null)
    setTimeout(() => {
      getPokemon(url).then((pokemonList) => {
        setPokemonList(pokemonList)
      }
      ).catch(err => console.log(err))
    }, 2000)
  }

  const getPokemon = async (url) => {
    const response = await axios.get(url);
    setPreviousUrl(currentUrl);
    setNextUrl(response.data.next);
    return getPokemonInfo(response.data.results);
  }

  const getPokemonInfo = async (pokemonArray) => {
    const pokemonDataPromises = pokemonArray.map(async (pokemon) => {
      let response = await axios.get(pokemon.url);
      let pokemonData = {
        name: pokemon.name,
        sprites: response.data.sprites,
      };
      return pokemonData;
    });

    return Promise.all(pokemonDataPromises);
  };

  return (
    <div className="App">
      <h1 className="title">Poke Api!</h1>
      {pokemonList ? <PokemonDisplay pokemonList={pokemonList} /> : <PokeballAnimation />}
      <div className="button-container">
        {pokemonList && previousUrl ? <button onClick={() => { navigate(previousUrl) }}>Load previous</button> : null}
        {pokemonList && nextUrl ? <button onClick={() => { navigate(nextUrl) }}>Load next</button> : null}
      </div>
    </div>
  );
}

export default App;

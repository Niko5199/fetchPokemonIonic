import { useState } from 'react';
import useFetchPokemon from '../hooks/useFetchPokemon';
import './ExploreContainer.css';

interface Pokemon { 
  name:string,
  url:string
}

const ExploreContainer: React.FC = () => {
  const [render, setRender] = useState(null)
  const arrPokemons = useFetchPokemon(setRender);
  return (
    <div className="container">
      {
        render ? arrPokemons.map((pokemon:Pokemon)=>(<p key={pokemon.name}>{pokemon.name}</p> )):<h1>Cargando</h1>
      }
    </div>
  );
};

export default ExploreContainer;

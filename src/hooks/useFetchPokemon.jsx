import { useEffect, useState } from "react";

const useFetchPokemon = (setRender) => {
  const [arrPokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fectPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const { results } = await res.json();
        setPokemons(results);
        setRender(true);
      } catch (error) {
        setPokemons([]);
        setRender(null);
      }
    }

    fectPokemon();
  }, [setRender]);

  return arrPokemons;
};

export default useFetchPokemon;

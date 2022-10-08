import { useEffect, useState } from "react";

const useFetchPokemon = () => {
  const [arrPokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fectPokemon() {
      const arr = [];
      try {
        for (let index = 1; index <= 20; index++) {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
          const data = await res.json();
          arr.push(data);
          setPokemons([...arr]);
        }
      } catch (error) {
        setPokemons([]);
      }
    }

    fectPokemon();
  }, []);

  return arrPokemons;
};

export default useFetchPokemon;

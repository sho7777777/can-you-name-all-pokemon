import { createContext, useState } from 'react';

export const PokemonContext = createContext({});

export const PokemonProvider = (props: { children: any; }) => {
  const { children } = props;

  const [pokemon, setPokemon] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }} >
      {children}
    </PokemonContext.Provider>
  )
}

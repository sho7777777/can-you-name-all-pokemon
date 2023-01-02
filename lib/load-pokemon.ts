import { totalPokeNum, url, urlSpiecies } from "../const/constants";
import { Pokemon } from "../types/pokemon";

export const loadPokemon = async () => {
  const pokemonList: Pokemon[] = [];

  // Fetch name origin.
  const origin = await fetch(url).then((res) => res.json());

  for (var i = 1; i <= totalPokeNum; i++) {
    const pokeman: Pokemon = { No: "", nameJa: "", nameEn: "", origin: "" };

    // Fetch nameJa, nameEn.
    const urlForName = urlSpiecies + i;
    const res = await fetch(urlForName);
    const data = await res.json();

    pokeman.No = ("00" + i).slice(-3);
    pokeman.nameJa = data.names[0].name;
    pokeman.nameEn = data.name;
    pokeman.origin = origin[i - 1].Origin;
    pokemonList.push(pokeman);
  }

  return pokemonList;
};

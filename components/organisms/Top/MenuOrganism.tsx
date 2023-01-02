import { MenuMolecule } from "../../molecules/Top/MenuMolecule";

export const MenuOrganism = () => {
  return (
    <div className="flex flex-col justify-center h-32 gap-4 hover:cursor-pointer w-40 mx-auto">
      <MenuMolecule link="/pokedex">ポケモンずかん</MenuMolecule>
      <MenuMolecule link="/pokemonBattle">言えるかな？</MenuMolecule>
      <MenuMolecule link="/ranking">ランキング</MenuMolecule>
    </div>
  );
};

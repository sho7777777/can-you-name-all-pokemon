import { SortProperty } from "../types/pokemon";

export const sortButtonProperties: SortProperty[] = [
  { value: "151", text: "すべて" },
  { value: "0", text: "1~10" },
  { value: "10", text: "11~20" },
  { value: "20", text: "21~30" },
  { value: "30", text: "31~40" },
  { value: "40", text: "41~50" },
  { value: "50", text: "51~60" },
  { value: "60", text: "61~70" },
  { value: "70", text: "71~80" },
  { value: "80", text: "81~90" },
  { value: "90", text: "91~100" },
  { value: "100", text: "101~110" },
  { value: "110", text: "111~120" },
  { value: "120", text: "121~130" },
  { value: "130", text: "131~140" },
  { value: "140", text: "141~151" },
];

export const totalPokeNum: number = 151;

// URL For Fetching Poke data
export const url: string = "http://localhost:3000/api/pokemon";

// URL For Fetching nameJa, nameEn.
export const urlSpiecies: string = "https://pokeapi.co/api/v2/pokemon-species/";

export const usrNameMaxLength = 20;

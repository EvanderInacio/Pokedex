export type PokeTypes =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export const getColors = (type: PokeTypes) => {
  switch(type) {
    case "bug":
      return "#76A866";
    case "dark":
      return '#333333';
    case "dragon":
      return "#7038f8";
    case "electric":
      return "#F9BE00";
    case "fairy":
      return "#f469a9";
    case "fighting":
      return "#c03028";
    case "fire":
      return "#f08030";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#735797";
    case "grass":
      return "#48D0B0";
    case "ground":
      return "#f2cd5a";
    case "ice":
      return "#77d2f7";
    case "normal":
      return "#5c5c5c";
    case "poison":
      return "#a040a0";
    case "psychic":
      return "#f542bd";
    case "rock":
      return "#BCAC66";
    case "steel":
      return "#b8b8d0";
    case "water":
      return "#457af7";
    default:
      return "#8A8A8A";
  }
};

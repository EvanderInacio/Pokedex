import bug from "../assets/badges/bug.jpg";
import ice from '../assets/badges/ice.jpg';
import dark from '../assets/badges/dark.jpg';
import fire from '../assets/badges/fire.jpg';
import rock from '../assets/badges/rock.jpg';
import fairy from '../assets/badges/fairy.jpg';
import ghost from '../assets/badges/ghost.jpg';
import grass from '../assets/badges/grass.jpg';
import steel from '../assets/badges/steel.jpg';
import water from '../assets/badges/water.jpg';
import dragon from '../assets/badges/dragon.jpg';
import flying from '../assets/badges/flying.jpg';
import ground from '../assets/badges/ground.jpg';
import normal from '../assets/badges/normal.jpg';
import poison from '../assets/badges/poison.jpg';
import psychic from '../assets/badges/psychic.jpg';
import fighting from '../assets/badges/fighting.jpg';
import electric from '../assets/badges/electric.jpg';
import { PokeTypes } from "./colorsType";


export const getTypes = (type: PokeTypes) => {
  switch(type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};


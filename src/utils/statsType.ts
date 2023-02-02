import speed from '../assets/types/speed.png';
import attack from '../assets/types/attack.png';
import defense from '../assets/types/defense.png';
import SPattack from '../assets/types/SPattack.png';
import SPdefense from '../assets/types/SPdefense.png';
import hp from '../assets/types/hp.png';

export const getStats = (stat: any) =>{
  switch (stat) {
      case "hp":
        return hp;
      case "attack":
        return  attack;
      case "defense":
        return defense;
      case "special-attack":
        return SPattack;
      case "special-defense":
        return SPdefense;
      case "speed":
        return speed;
      default:
        return "Stat"
    }
}
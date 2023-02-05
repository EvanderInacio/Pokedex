import { PokemonType, PokemonTypes } from "@/interface/pokemonTypes"
import { getColors } from "@/utils/colorsType"
import { BsFillDiagram3Fill, BsPeaceFill } from "react-icons/bs"
import { GiRank3 } from "react-icons/gi"
import { BoxContainer, BoxContent } from "./styles"

export function Box({ pokemon }: PokemonTypes | any) {
  function colors() {
    return pokemon.types?.map((type: PokemonType) => {
      if (type.slot === 1) {
        return getColors(type.type.name)
      }
    })
  }

  return (
    <BoxContainer>
      <BoxContent color={colors()}>
        <h4>Form</h4>
        <span>
          <BsPeaceFill />
        </span>
        {pokemon.forms.map((form: PokemonTypes) => (
          <p>{form.name}</p>
        ))}
      </BoxContent>

      <BoxContent color={colors()}>
        <h4>Experience</h4>
        <span>
          <GiRank3 />
        </span>
        <p>{pokemon.base_experience} </p>
      </BoxContent>
      
      <BoxContent color={colors()}>
        <h4>Type</h4>{' '}
        <span>
          <BsFillDiagram3Fill />
        </span>
        {pokemon.types.map((type: PokemonType) => (
          <p>{type.type.name}</p>
        ))}
      </BoxContent>
    </BoxContainer>
  )
}

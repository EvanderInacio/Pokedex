import {  useEffect, useState } from 'react'
import { PokemonType, PokemonTypes } from '@/interface/pokemonTypes'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { getColors } from '../../utils/colorsType'
import { getTypes } from '@/utils/badgesType'
import { BadgeContainer, Container, ImageContainer, Pokeball } from './styles'

export function getPokemon(pokemon: PokemonTypes | undefined) {
  return axios.get(`/pokemon/${pokemon}`);
}

export function Card({ url }: PokemonTypes | any ) {
 
  const [pokemon, setPokemon] = useState<PokemonTypes>()

  useEffect(() => {
    axios.get(url).then(response => setPokemon(response.data))
  }, [])

  return (
    <>
      {pokemon && (
        <Link href={`/pokemon/${pokemon.id}`}>
          <Container
            color={pokemon?.types?.map((type: PokemonTypes | any) => {
              if (type.slot === 1) {
                return getColors(type.type.name)
              }
            })}
          >
            <Pokeball />
            <h1>{pokemon.name}</h1>
            <p>#{pokemon.id}</p>

            <ImageContainer 
              className='img-container'
              src={`https://raw.githubusercontent.com/PokeAPI//sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
            />
            
            <BadgeContainer>
              {pokemon.types.map((type: PokemonType | any ) => (
                <Image key={type.type.name} src={getTypes(type.type.name)} alt={type.type.name} />
              ))}
            </BadgeContainer>
          </Container>
        </Link>
      )} 
    </>
  )
}

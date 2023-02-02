import {  useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { getColors } from '../../utils/colorsType'
import { getTypes } from '@/utils/badgesType'
import { BadgeContainer, Container, ImageContainer, Pokeball } from './styles'
import Image from 'next/image'

export function Card({ url } ) {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url).then(response => setPokemon(response.data))
  }, [])

  return (
    <>
      {pokemon && (
        <Link href={`/pokemon/${pokemon.id}`}>
          <Container
            color={pokemon?.types?.map(type => {
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
              {pokemon.types.map(type => (
                <Image key={type} src={getTypes(type.type.name)} alt={type.type.name} />
              ))}
            </BadgeContainer>
          </Container>
        </Link>
      )}
    </>
  )
}

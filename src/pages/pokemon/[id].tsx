import { api } from '@/services/api'
import { PokemonType, PokemonTypes } from '@/interface/pokemonTypes'
import { getColors } from '@/utils/colorsType'
import { getStats } from '@/utils/statsType'
import { getTypes } from '@/utils/badgesType'
import { Card } from '@/components/Card'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import {
  AboutPokemon,
  ContainerPokemon,
  ContentPokemon,
  HeaderPokemon,
  StatsPokemon,
  AboutContent,
} from '@/styles/pokemon'
import { BsPeaceFill, BsFillDiagram3Fill } from 'react-icons/bs'
import { GiRank3 } from 'react-icons/gi'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { ImagesDetail } from '@/components/ImagesDetail'
import { Box } from '@/components/Box'

export const getStaticPaths = async () => {
  const maxPokemons = 151

  const res = await api.get(`?limit=${maxPokemons}`)

  const pokemons = res.data.results

  const paths = pokemons.map((pokemon: any, index: number) => {
    return {
      params: { id: (index + 1).toString() }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context: { params: { id: any } }) => {
  const { id } = context.params

  const res = await api.get(`${id}`)

  const pokemon = res.data

  return {
    props: {
      pokemon
    }
  }
}

export default function Pokemon({ pokemon }: PokemonTypes | any) {
  console.log(pokemon)

  return (
    <>
    <Head>
      <link rel="icon" href={pokemon.sprites.other['dream_world'].front_default}/>
      <title>{pokemon.name} | Pokédex</title>
    </Head>
    
    <ContainerPokemon
      color={pokemon.types?.map((type: PokemonType) => {
        if (type.slot === 1) {
          return getColors(type.type.name)
        }
      })}
    >
      <Link href={'/'}>
        <MdOutlineArrowBackIosNew className='back'/> 
      </Link> 
      <HeaderPokemon>
        <div className="name">
          <span>#{pokemon.id} </span>
          <h1>{pokemon.name} </h1>
        </div>

        <div className="image">
          <img
            src={pokemon.sprites.other['dream_world'].front_default}
            alt={pokemon.name}
          />
        </div>
      </HeaderPokemon>

      <ContentPokemon>
        <AboutPokemon>
          <h2>
            About <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />
          </h2>

          <AboutContent>
            <div className="content">
              <div>
                <span>Name:</span> <p>{pokemon.name}</p>
              </div>

              <div className="badge">
                <span>Types:</span>
                {pokemon.types.map((type: PokemonType) => (
                  <Image
                    key={type.id}
                    src={getTypes(type.type.name)}
                    alt={type.type.name}
                  />
                ))}
              </div>

              <div>
                <span>Height:</span>
                <p>{pokemon.height * 10} cm</p>
              </div>
              <div>
                <span>Weight:</span>
                <p>{pokemon.weight / 10} kg</p>
              </div>
              <div>
                <span>Forms:</span>
                {pokemon.forms.map((form: PokemonTypes) => (
                  <p>{form.name}</p>
                ))}
              </div>
              <div className='ability-content'>
                <span>Ability:</span>
                <div className="ability1">
                  {pokemon?.abilities.map((ability: PokemonTypes) => (
                    <p className="ability" key={ability.ability.name}>
                      {ability.ability.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <Box pokemon={pokemon} />
          </AboutContent>
        </AboutPokemon>

        <StatsPokemon>
          <h2>
            Stats <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny} alt="" />
          </h2>

          <div className="stats">
            {pokemon.stats?.map((stat: PokemonType) => (
              <div className="stat">
                <h4>{stat.stat.name}</h4>
                <Image
                  width={50}
                  key={stat.id}
                  src={getStats(stat.stat.name)}
                  alt=""
                />
                <p>{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </StatsPokemon>

        <div>
          <ImagesDetail pokemon={pokemon}/>
        </div>
      </ContentPokemon>
    </ContainerPokemon>
    </>
  )
}

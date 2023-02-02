import { api } from '@/services/api'
import { getColors } from '@/utils/colorsType'
import {
  AboutPokemon,
  ContainerPokemon,
  ContentPokemon,
  HeaderPokemon,
  StatsPokemon,
  AboutContent,
  Box
} from '@/styles/pokemon'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsPeaceFill, BsFillDiagram3Fill, BsFillStarFill } from 'react-icons/bs'
import {
  GiRank3,
  GiHeartPlus,
  GiCheckedShield,
  GiBroadsword,
  GiCrossedSwords,
  GiEdgedShield,
  GiRunningNinja,
  GiMineExplosion
} from 'react-icons/gi'
import Image from 'next/image'
import { getTypes } from '@/utils/badgesType'
import { getStats } from '@/utils/statsType'

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

export default function Pokemon({ pokemon }) {
  return (
    <ContainerPokemon
      color={pokemon.types?.map(type => {
        if (type.slot === 1) {
          return getColors(type.type.name)
        }
      })}
    >
      <HeaderPokemon>
        <div className="name">
          <span>#{pokemon.id}</span>
          <h1>{pokemon.name}</h1>
        </div>

        <div className="image">
          {/* <Pokeball /> */}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI//sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
        </div>
      </HeaderPokemon>

      <ContentPokemon>
        <AboutPokemon>
          <h2>About</h2>

          <AboutContent>
            <div className="content">
              <div>
                <span>Nome:</span> <p>{pokemon.name}</p>
              </div>

              <div className="badge">
                <span>Tipos:</span>
                {pokemon.types.map(type => (
                  <Image
                    key={type.id}
                    src={getTypes(type.type.name)}
                    alt={type.type.name}
                  />
                ))}
              </div>

              <div>
                <span>Altura:</span>
                <p>{pokemon.height * 10} cm</p>
              </div>
              <div>
                <span>Peso:</span>
                <p>{pokemon.weight / 10} kg</p>
              </div>
              <div>
                <span>Formas:</span>
                {pokemon.forms.map(form => (
                  <p>{form.name}</p>
                ))}
              </div>
              <div className="ability1">
                <span>Habilidades:</span>
                {pokemon?.abilities.map(ability => (
                  <p className="ability" key={ability.ability.name}>
                    {ability.ability.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="box">
              <Box>
                <h4>Especie:</h4>
                <span>
                  <BsPeaceFill />
                </span>
                {pokemon.forms.map(form => (
                  <p>{form.name}</p>
                ))}
              </Box>
              <Box>
                <h4>Experiencia:</h4>
                <span>
                  <GiRank3 />
                </span>
                <p>{pokemon.base_experience}</p>
              </Box>
              <Box>
                <h4>Tipo: </h4>{' '}
                <span>
                  <BsFillDiagram3Fill />
                </span>
                {pokemon.types.map(type => (
                  <p>{type.type.name}</p>
                ))}
              </Box>
            </div>
          </AboutContent>
        </AboutPokemon>

        <StatsPokemon>
          <h2>Atributos</h2>
          <div className="stats">
            {pokemon.stats?.map(stat => (
              <div className="stat">
                <h4>{stat.stat.name}</h4>
                <Image
                  width={50}
                  key={stat.id}
                  src={getStats(stat.stat.name)}
                  alt=""
                />
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </StatsPokemon>
      </ContentPokemon>
    </ContainerPokemon>
  )
}

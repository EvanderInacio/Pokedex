import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { PokemonTypes } from '@/interface/pokemonTypes'
import { api } from '@/services/api'
import { Loading, PokemonsContainer } from '@/styles/pokemons'
import { useEffect, useState } from 'react'
import pikachu from '@/assets/pikachu.gif'
import Image from 'next/image'
import Head from 'next/head'

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<any>([])
  const [next, setNext] = useState<number>(50)
  const [loading, setLoading] = useState(true)

  const fetchPokemons = async (url: string) => {
    const data = await api.get(url)
    setPokemons(data.data.results)
    setLoading(false)
  }

  const showMorePokemons = () => {
    setNext(next => next + 50)
  }

  useEffect(() => {
    fetchPokemons(`?limit=${next}&offset=0`)
  }, [next])

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokeball.svg" />
      </Head>
      <PokemonsContainer>
        <Header />
        <div className="container">
          {pokemons &&
            pokemons.map((pokemon: PokemonTypes) => (
              <Card key={pokemon.id} url={pokemon.url} />
            ))}
        </div>

        <Loading>
          <Image width={200} height={200} src={pikachu} alt="" />
          <button onClick={showMorePokemons}>
            {loading ? (
              ''
            ) : (
              <div className="button">
                <p>Buscar mais pokemons</p>
              </div>
            )}
          </button>
        </Loading>
      </PokemonsContainer>
    </>
  )
}

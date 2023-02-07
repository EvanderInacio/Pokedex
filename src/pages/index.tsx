import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import {
  HomeContainer,
  HomeContent,
  Explorer,
} from '@/styles/pokemons'
import pokemon from '../assets/pokemon.svg'
import pokeball from '../assets/blue-pokeball.svg'
import { ImagesHome } from '@/components/ImagesHome'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokeball.svg" />
      </Head>
      <HomeContainer>
        <header>
          <Image src={pokemon} alt="" />
          <Link
            href={`https://github.com/EvanderInacio/Pokedex`}
            target="_blank"
          >
            <BsGithub size={40} />
          </Link>
        </header>

        <HomeContent>
          <Explorer>
            <h2>Pokédex <Image src={pokeball} alt="" /></h2>
            <p>Explore pokémons na Pokédex</p>
            <Link className="button" href={`/pokemons`}>
              Pesquisar Pokemons
            </Link>
          </Explorer>

          <ImagesHome />
          
        </HomeContent>
      </HomeContainer>
    </>
  )
}

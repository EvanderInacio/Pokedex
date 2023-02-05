import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import {
  PokemonsContainer,
  PokemonsContent,
  Pokeballs
} from '@/styles/pokemons'
import pokemon from '../assets/pokemon.svg'
import pokeball from '../assets/blue-pokeball.svg'
import { ImagesHome } from '@/components/ImagesHome'

export default function Home() {
  return (
    <>
      <PokemonsContainer>
        <header>
          <Image src={pokemon} alt="" />
          <Link
            href={`https://github.com/EvanderInacio/Pokedex`}
            target="_blank"
          >
            <BsGithub size={40} />
          </Link>
        </header>

        <PokemonsContent>
          <Pokeballs>
            <h2>Pokédex <Image src={pokeball} alt="" /></h2>
            <p>Explore pokémons na Pokédex</p>
            <Link className="button" href={`/pokemons`}>
              Pesquisar Pokemons
            </Link>
          </Pokeballs>

          <ImagesHome />
          
        </PokemonsContent>
      </PokemonsContainer>
    </>
  )
}

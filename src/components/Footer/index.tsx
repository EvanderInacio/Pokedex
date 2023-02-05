import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div className="span">
          <span>Pokémon 2023</span>
      </div>

      <div className="icons">
        <Link href={`https://github.com/EvanderInacio/Pokedex`} target="_blank">  
          <BsGithub size={25}/> 
        </Link>
      </div>
    </FooterContainer>
  )
}
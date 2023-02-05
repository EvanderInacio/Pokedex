import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import {  HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <Link href={`/`}>
        <Image src={logo} alt='Logo escrito Pokémon em amarelo e bordas azuis' />
      </Link>

      <div className="form">
        <input type="search" name="" id="" placeholder="Search Pokemons" />
        <button type="submit"> <BsSearch /> </button>
      </div>
    </HeaderContainer>
  )
}
import Image from "next/image";
import logo from "../../assets/logo.svg";
import {  HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt='Logo escrito Pokémon em amarelo e bordas azuis' />

      {/* <input type="search" name="" id="" placeholder="Search Pokemons" /> */}
    </HeaderContainer>
  )
}
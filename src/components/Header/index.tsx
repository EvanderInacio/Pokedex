import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import {  HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt='Logo escrito Pokémon em amarelo e bordas azuis' />

      <div className="form">
        <input type="search" name="" id="" placeholder="Search Pokemons" />
        <button type="submit"> <BsSearch /> </button>
      </div>
    </HeaderContainer>
  )
}
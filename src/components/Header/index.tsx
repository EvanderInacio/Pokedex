import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import {  HeaderContainer } from "./styles"

export function Header() {
  const route = useRouter()
  const [search, setSearch] = useState('')

  const handleChange = (e: any) => {
    e.target.value = e.target.value.toLowerCase()

    setSearch(e.target.value)
  }

  const searchPokemon = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const response = await api.get(search)
    const pokemon = response.data
    const data = {
      id: pokemon.id,
    }

    route.push(`/pokemon/${data.id}`)
  }

  return (
    <HeaderContainer>
      <Link href={`/`}>
        <Image src={logo} alt='Logo escrito Pokémon em amarelo e bordas azuis' />
      </Link>

      <div className="form">
        <input 
         type="search" 
         onChange={handleChange}
         placeholder="Search Pokemons" />
        <button type="submit" onClick={searchPokemon}> <BsSearch /> </button>
      </div>
    </HeaderContainer>
  )
}
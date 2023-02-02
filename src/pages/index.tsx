import { Card } from '@/components/Card'
import { api } from '@/services/api';
import { useEffect, useState } from 'react'

export default function Home() {
  const [pokemons, setPokemons] = useState<any>([]);

  const fetchPokemons = async (url: string) => {
    const data = await api.get(url);
  
    setPokemons(data.data.results);
  }

  useEffect(() => {
    fetchPokemons(`?limit=151`);
  }, []);

  return (
    <div className="container">
      {pokemons &&
        pokemons.map(pokemon => <Card key={pokemon.id} url={pokemon.url} />)}
    </div>
  )
}

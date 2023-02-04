import { PokemonTypes } from '@/interface/pokemonTypes'
import { ImagesContainer, ImagesContent } from './styles'

export function ImagesDetail({ pokemon }: PokemonTypes | any) {
  return (
    <ImagesContainer>
      <h2> Sprites </h2>
      <ImagesContent>
        <div className="images">
          <h3> Dream World </h3>
          <div>
            <img src={pokemon.sprites.other['dream_world'].front_default} />

            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
            />
          </div>
        </div>

        <div className="images">
          <h3> Home </h3>
          <div>
            <img src={pokemon.sprites.other['home'].front_default} />
            <img src={pokemon.sprites.other['home'].front_shiny} />
          </div>
        </div>

        <div className="images">
          <h3> Generation 1 </h3>
          <div>
            <img
              src={
                pokemon.sprites.versions['generation-i']['red-blue']
                  .front_default
              }
            />
            <img
              src={
                pokemon.sprites.versions['generation-i']['yellow'].front_default
              }
            />
          </div>
        </div>

        <div className="images">
          <h3> Generation 2 </h3>
          <div>
            <img
              src={
                pokemon.sprites.versions['generation-ii']['gold'].front_default
              }
            />
            <img
              src={
                pokemon.sprites.versions['generation-ii']['silver'].front_shiny
              }
            />
          </div>
        </div>

        <div className="images">
          <h3> Generation 3 </h3>
          <div>
            <img
              src={
                pokemon.sprites.versions['generation-iii']['emerald']
                  .front_default
              }
            />
            <img
              src={
                pokemon.sprites.versions['generation-iii']['firered-leafgreen']
                  .front_shiny
              }
            />
          </div>
        </div>

        <div className="images">
          <h3> Generation 4 </h3>
          <div>
            <img
              src={
                pokemon.sprites.versions['generation-iv']['diamond-pearl']
                  .front_default
              }
            />
            <img
              src={
                pokemon.sprites.versions['generation-iv'][
                  'heartgold-soulsilver'
                ].front_shiny
              }
            />
          </div>
        </div>

        <div className="images">
          <h3> Generation 5 </h3>
          <div>
            <img
              src={
                pokemon.sprites.versions['generation-v']['black-white']
                  .front_default
              }
            />
            <img
              src={
                pokemon.sprites.versions['generation-v']['black-white']
                  .front_shiny
              }
            />
          </div>
        </div>

        <div className="images">
          <h3> Generation 6 </h3>
          <div>
            <img
              src={
                pokemon.sprites.versions['generation-vi'][
                  'omegaruby-alphasapphire'
                ].front_default
              }
            />
            <img
              src={pokemon.sprites.versions['generation-vi']['x-y'].front_shiny}
            />
          </div>
        </div>
      </ImagesContent>
    </ImagesContainer>
  )
}

import Image from 'next/image'
import { Images } from './styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import { Carousel } from 'react-responsive-carousel'

import Bulbasaur from "../../assets/pokemons/1.svg"
import Charizard from "../../assets/pokemons/6.svg"
import Blastoise from "../../assets/pokemons/9.svg"
import Pikachu  from "../../assets/pokemons/25.svg"
import Meowth from "../../assets/pokemons/52.svg"
import Snorlax from "../../assets/pokemons/143.svg"
import Mew from "../../assets/pokemons/151.svg"

export function ImagesHome() {
  return (
    <Images>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        <Image
          width={455}
          height={400}
          src={Bulbasaur}
          alt=""
        />
        <Image
          width={455}
          height={400}
          src={Charizard}
          alt=""
        />
        <Image
          width={455}
          height={400}
          src={Blastoise}
          alt=""
        />
        <Image
         className='teste'
         width={455}
         height={400}
          src={Pikachu}
          alt=""
        />
        <Image
          width={455}
          height={400}
          src={Meowth}
          alt=""
        />
        <Image
          width={455}
          height={400}
          src={Snorlax}
          alt=""
        />
        <Image
          width={455}
          height={400}
          src={Mew}
          alt=""
        />
      </Carousel>
    </Images>
  )
}

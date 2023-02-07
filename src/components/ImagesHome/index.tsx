import Image from 'next/image'
import { Images } from './styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Bulbasaur from '../../assets/pokemons/1.svg'
import Charizard from '../../assets/pokemons/6.svg'
import Blastoise from '../../assets/pokemons/9.svg'
import Pikachu from '../../assets/pokemons/25.svg'
import Meowth from '../../assets/pokemons/52.svg'
import Snorlax from '../../assets/pokemons/143.svg'
import Mew from '../../assets/pokemons/151.svg'
import Wobbuffet from '../../assets/pokemons/202.svg'

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
        <Image width={455} height={400} src={Pikachu} alt="Pikachu" />
        <Image width={455} height={400} src={Charizard} alt="Charizard" />
        <Image width={455} height={400} src={Bulbasaur} alt="Bulbasaur" />
        <Image width={455} height={400} src={Blastoise} alt="Blastoise" />
        <Image width={455} height={400} src={Meowth} alt="Meowth" />
        <Image width={455} height={400} src={Wobbuffet} alt="Wobbuffet" />
        <Image width={455} height={400} src={Snorlax} alt="Snorlax" />
        <Image width={455} height={400} src={Mew} alt="Mew" />
      </Carousel>
    </Images>
  )
}

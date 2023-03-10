import styled from "styled-components"

export const ContainerPokemon = styled.div`
  .back {
      position: absolute;
      top: 1rem;
      left: 2rem;
      font-size: 2.5rem;
      font-weight: bold;
      cursor: pointer;
    }

  background: ${({ color }) => color};
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const HeaderPokemon = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  padding-top: 2rem;

  .name {
    span {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.light08};
    }

    h1 {
      font-size: 4.3rem;
      font-weight: bold;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.white};
    }
  } 

  .image {
    position: relative;
    img {
      width: 16rem;
    }
  }
  
  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      margin-top: 3rem;
      h1 {
        font-size: 2rem;
      }
    }

    .image {
      margin-top: 4rem;
      img {
        width: 10rem;
      }
    }
  }

  @media (max-width: 768px) {
    .name {
      margin-top: 3rem;
      h1 {
        font-size: 2.2rem;
      }
    }

    .image {
      margin-top: 4rem;
      img {
        width: 12rem;
      }
    }
  }
`

export const ContentPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  background: ${({ theme }) => theme.backgrounds.background};
  backdrop-filter: blur(5px);
  padding: 3rem 5rem;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  span {
    font-size: 1.5rem;
    font-weight: 500;
    padding-right: 0.5rem;
    text-transform: capitalize;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.backgrounds.purple};

    img {
        width: 4rem;
      }
  }

  @media (max-width: 400px ) {
    h2 {
      font-size: 2rem;
    }
  }

  @media (min-width: 568px ) {
    h2 {
      img {
        width: 8rem;
      }
    }
  }


`

export const AboutPokemon = styled.div`
  h3 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  margin-bottom: 5rem;
`
export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  gap: 5rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  .content{
    display: grid;
  
    div {
      display: flex;
      align-items: center;
    }

    span {
      font-weight: 400;
      text-transform: capitalize;
      color: ${({theme}) => theme.colors.light04};
    }

    p{
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: capitalize;
    }


    .ability-content {
      display: flex;
      align-items: flex-start;
      margin-top: 1rem;

      .ability1 {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;

        .ability {
          background-color: ${({theme}) => theme.backgrounds.blue};
          color: ${({theme}) => theme.backgrounds.white};
          padding: 0.4rem;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: baseline;
        }
      }
    }

    
    

    .badge {
      display: flex;
      gap: 0.2rem;
    }

    @media (max-width: 568px) {
      gap: 1rem;
      span {
        font-weight: 400;
        font-size: 1rem;
      }

      p{
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    @media (max-width: 768px) {
      gap: 1rem;
      span {
        font-weight: 400;
        font-size: 1.2rem;
      }

      p{
        font-size: 1.4rem;
        font-weight: 500;
      }
      
      .ability-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .ability1 {
          border-radius: 8px;
          justify-content: start;
          align-items: flex-start;
        }
      }

    }
  }

  .box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    
    @media (max-width: 568px) {
      display: flex;
      flex-direction: column;
    }
  }
  
`



export const StatsPokemon = styled.div`
  border-radius: 15px;
  background: ${({ theme }) => theme.backgrounds.black};
  margin-bottom: 5rem;
  padding: 4rem;

  h2 {
    text-align: center;
  }

  .stats {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;

    .stat {
      display: flex;
      gap: 1.1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h4{
        text-align: center;
        text-transform: capitalize;
        font-size: 1.7rem;
      }
    
      p {
        font-size: 1.5rem;
        font-weight: 500;
      } 

    }

    @media (max-width: 568px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    @media (min-width: 569px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: center;
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      
    }
  }

`

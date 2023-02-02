import { Key } from "react";
import styled from "styled-components";
import theme from "./theme/default";

export const ContainerPokemon = styled.div`
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


  .name {
    span {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.light04};
    }

    h1 {
      font-size: 4.3rem;
      font-weight: bold;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.white};
    }
  } 

  .image {
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
  background: ${({ theme }) => theme.backgrounds.white};
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
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`

export const AboutPokemon = styled.div`
  h3 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  margin-bottom: 3rem;
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
      font-weight: 300;
    }

    p{
      font-size: 1.6rem;
      font-weight: 500;
    }

    .ability {
      margin-left: 5px;
      border: 2px solid ${({theme}) => theme.colors.dark};
      padding: 0.2rem;
      border-radius: 5px;
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

      .ability1 {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        gap: 0.5rem;
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

      .ability {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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

export const Box = styled.div`
  border-radius: 8px;
  width: 14rem;
  height: 13rem;
  background: ${({theme}) => theme.backgrounds.gray};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
      width: 13rem;
      height: 11rem;
    }

  h4 {
    color: ${({theme}) => theme.backgrounds.black};
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  span {
    color: ${({theme}) => theme.backgrounds.purple};
    font-size: 2.5rem;
  }

  p {
    font-weight: bold;
    font-size: 1.4rem;
    color: ${({theme}) => theme.backgrounds.black};
  }

`


export const StatsPokemon = styled.div`
  border-radius: 15px;
  background: ${({ theme }) => theme.backgrounds.white};

  h2 {
    text-align: center;
  }
  
  p {
    font-size: 1.5rem;
  } 

  .stats {
    display: flex;
    gap: 3rem;

    .stat {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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


// export const Back = styled.div`
// position: fixed;
// right: 0;
// opacity: 0.8;
// z-index: 1;
//  img {
//   width: 20rem;
//  }

// `


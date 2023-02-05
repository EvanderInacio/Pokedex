import styled from "styled-components";

export const PokemonsContainer = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    align-items: center;
  }

`

export const PokemonsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 468px) {
    display: flex;
    gap: 3rem;
  }
  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const Pokeballs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    align-items: center;
    font-size: 2.5rem;
    display: flex;
    color: ${({theme}) => theme.backgrounds.white};

    img {
      width: 5rem;
      height: 5rem;
    }

    @media (min-width: 468px) {
      font-size: 3rem;

      img {
        width: 8rem;
        height: 8rem;
      }
    }

    @media (min-width: 768px) {
      font-size: 4rem;

      img {
        width: 9rem;
        height: 9rem;
      }
    }

    @media (min-width: 944px) {
      font-size: 6rem;

      img {
       width: 12rem;
       height: 10rem;
      }
    }
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: ${({theme}) => theme.backgrounds.gray};
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .button {
    
    padding: 1rem 2rem;
    border-radius: 10px;
    background: ${({theme}) => theme.backgrounds.blue};

    &:hover {
     background: ${({theme}) => theme.backgrounds.blueSecond};
    }
  }

`


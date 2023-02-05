import styled from "styled-components";

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImagesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  @media (min-width: 944px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .images {
    h3 {
      background: ${({theme}) => theme.backgrounds.blue};
      border-radius: 10px;
      padding: 0.5rem;
      text-align: center;
      color: ${({theme}) => theme.colors.white};
      margin-bottom: 1rem;
    }

    img {
        width: 10rem;

        @media (max-width: 479px) {
          display: flex;
          justify-content: center;
        }
  
        @media (min-width: 1200px) {
          width: 15rem;
        }
      }
  }

`
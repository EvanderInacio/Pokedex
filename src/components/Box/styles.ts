import styled from "styled-components"

export const BoxContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
  
`

export const BoxContent = styled.div`
  background: ${({color}) => color};
  width: 14rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  
  @media (max-width: 1100px) {
      width: 13rem;
      height: 11rem;
    }

  h4 {
    color: ${({theme}) => theme.backgrounds.grayLight};
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  span {
    color: ${({theme}) => theme.backgrounds.background};
    font-size: 2.6rem;
  }

  p {
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({theme}) => theme.backgrounds.white};
  }

`

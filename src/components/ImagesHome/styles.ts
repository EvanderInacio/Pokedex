import styled from "styled-components";

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 10rem;
  
  @media (min-width: 468px) {
    width: 20rem;
  }
  
  @media (min-width: 768px) {
    width: 30rem;
  }
  
  @media (min-width: 994px) {
    width: 40rem;
  }

`
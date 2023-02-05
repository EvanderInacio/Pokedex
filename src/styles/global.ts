import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.backgrounds.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1rem;
    line-height: 140%;
    letter-spacing: 1px;
  }

  .container {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 944px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    
    @media (min-width: 1250px) {
     grid-template-columns: repeat(3, 1fr);
    }
  }

  &::-webkit-scrollbar {
      width: 1rem;               
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.backgrounds.background};     
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.backgrounds.blue};    
      border-radius: .5rem;       
      border: 0.25rem solid ${({ theme }) => theme.backgrounds.background};
    }
`;

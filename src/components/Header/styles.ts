import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin: 3rem;
  margin-bottom: 5rem;

  @media (min-width: 568px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .form {
    display: flex;
    align-items: center;

    input {
      padding: 10px 20px;
      font-size: 17px;
      border: 1px solid white;
      border-right: none;
      float: left;
      width: 90%;
      background: none;
      border-radius: 20px 0 0 20px;
      outline: none;
      border: 0.13rem solid ${({theme}) => theme.backgrounds.blue};
      color: ${({theme}) => theme.colors.white};

      &:focus {
        border-color: ${({theme}) => theme.backgrounds.blueSecond}; 
      }
    }

    button {
      width: 3.2rem;
      height: 2.938rem;
      background: ${({theme}) => theme.backgrounds.blue};
      color: ${({theme}) => theme.backgrounds.white};
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 1rem;
      border-radius: 0 15px 15px 0;

      &:hover {
        background: ${({theme}) => theme.backgrounds.blueSecond};
      }

    }
  }
    
  
`
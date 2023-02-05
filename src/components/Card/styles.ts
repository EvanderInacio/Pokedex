import styled from 'styled-components';

interface ColorProps {
  color: any;
}

export const Container = styled.div<ColorProps>`
  width: 20rem;
  height: 13rem;
  position: relative;
  border-radius: 0.75rem;
  transition: all 0.5s ease;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 1.25rem 0 ${({ color }) => color};
  margin: 2rem 1.25rem;
  padding: 2rem;
  cursor: pointer;

  h1 {
    font-size: 2rem;
    overflow: hidden;
    margin-top: -0.5rem;
    white-space: nowrap;
    margin-bottom: 0.625rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 2rem;
    font-family: 'Roboto';
    font-weight: 300;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.light08};
  }

  &:hover {
    .img-container {
      top: -20%;
    }

    box-shadow: 0 1rem 3rem 0 ${({ color }) => color};
  }

  @media (max-width: 400px) {
    padding: 1rem;
    margin: 1rem;
    width: 15rem;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
    }

    &:hover {
    .img-container {
      top: -10%;
    }
    box-shadow: 0 1rem 3rem 0 ${({ color }) => color};
  }
  }

  @media (min-width: 568px) {
    width: 24rem;
  }
`;

export const Pokeball = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.light02};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 10px;

  &:before {
    content: '';
    width: 180px;
    border: 4em solid;
    position: relative;
    padding-bottom: 10em;
    border-radius: 100%;
    clip-path: polygon(
      0 0,
      0 40%,
      50% 40%,
      50% 60%,
      0 60%,
      0 100%,
      100% 100%,
      100% 60%,
      50% 60%,
      50% 40%,
      100% 40%,
      100% 0
    );
  }

  &:after {
    width: 5em;
    content: '';
    position: absolute;
    padding-bottom: 5em;
    border-radius: 100%;
    background-color: currentColor;
  }
  
  @media (max-width: 568px) {
     display: none;
  }
`;

export const ImageContainer = styled.img`
  width: 10rem;
  top: 5%;
  right: 1%;
  position: absolute;
  transition: top 0.8s ease;

  @media (max-width: 568px) {
    position: absolute;
    width: 8rem;
    top: 30%;
    right: 5%;
  }
`;

export const BadgeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

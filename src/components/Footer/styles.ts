import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
  border-top: 1px solid ${({theme}) => theme.backgrounds.blue};
  padding: 1.5rem 0;

  .span {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

`
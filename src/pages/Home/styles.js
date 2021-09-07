import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;

  div.section {
    text-align: center;
    a {
      text-decoration: none;
      &.add-capital {
        margin-top: 1rem;
        font-size: 4rem;
        color: #01fe40;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1.2rem;
  }
`;

import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const WeatherContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  .error {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 1.2rem;
  }
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-bottom: 4rem;
    margin-top: 0.5rem;
  }
  .display-time {
    span {
      text-align: center;
      display: block;
      font-size: 5rem;
      font-weight: 200;
      color: ${COLORS.blue};
    }
  }
  .weather-icon {
    img {
      width: 12rem;
      height: 12rem;
    }
  }
  .desc {
    margin-bottom: 1rem;
  }
`;

export const WeatherDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
  span {
    color: ${COLORS.blueLight};
    font-size: 1.4rem;
    font-weight: 200;
    display: inline-block;
    margin-left: 1rem;
  }
`;

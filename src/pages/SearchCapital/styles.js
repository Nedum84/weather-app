import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    div.input-wrapper {
      width: 100%;
      display: flex;
      padding: 0.5rem 0;
      border-bottom: 1px solid ${COLORS.blue};
      input {
        flex: 1;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1.5rem;
        color: ${COLORS.primary};
        font-weight: 600;
      }
      span {
        display: inline-block;
        padding-left: 2rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .save-btn-wrapper {
      width: 100%;
      text-align: right;
      button {
        color: #3893b1;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        background: none;
        border: none;
      }
    }
  }
`;

export const ResultWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  ul {
    width: 100%;
    li {
      list-style-type: none;
      margin: 0.2rem 0;
      font-size: 1.6rem;
      color: ${COLORS.blue};
      font-weight: 500;
      cursor: pointer;
      span {
        color: ${COLORS.primary};
      }
    }
  }
`;

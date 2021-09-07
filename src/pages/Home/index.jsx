import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SELECTED_CAPITAL } from "../../redux/types/action.types";
import LocalStorageUtils from "../../utils/local.storage";
import { ROUTES } from "../../utils/routes";
import { HomeContainer } from "./styles";

function Home() {
  const { capitals } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <HomeContainer>
      <div className="section">
        {capitals.map((capital, index) => (
          <Link
            key={index}
            to={ROUTES.weather}
            onClick={() => {
              LocalStorageUtils.setSelectedCapital(capital);
              dispatch({ type: SELECTED_CAPITAL, capital });
            }}
          >
            <h1>{capital}</h1>
          </Link>
        ))}
        <Link to={ROUTES.search} className="add-capital">
          &#43;
        </Link>
      </div>
    </HomeContainer>
  );
}

export default Home;

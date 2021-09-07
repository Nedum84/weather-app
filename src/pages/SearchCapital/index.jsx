import React from "react";
import Navbar from "../../components/Navbar";
import counryList from "countries-list";
import { ResultWrapper, SearchContainer } from "./styles";
import { ICONS } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { useHistory } from "react-router-dom";
import { SAVE_CAPITAL } from "../../redux/types/action.types";

function SearchCapital() {
  const { capitals } = useSelector((state) => state.reducer);
  const [selected, setSelected] = React.useState();
  const [inputText, setInputText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {}, []);

  const onTextChange = (e) => {
    const { value } = e.target;
    //--> Set input value
    setInputText(value);
    //Reset selected
    if (selected) setSelected(null);
    if (value !== "") {
      //--> global case insensitive regex
      const pattern = new RegExp(value, "gi");
      const allCountries = Object.values(counryList.countries);
      //-->Get Matched Counties && extract their capitals
      const results = allCountries
        .filter(
          (country, index) =>
            pattern.test(country.capital) && !capitals.includes(country.capital)
        )
        .map((country) => country.capital);
      //-->Set Capitals(limit: 8)
      setSearchResults(results.slice(0, 8));
    }
  };

  //--> On click of the list dropdown
  const onSelect = (capital) => {
    setSelected(capital);
    setInputText(capital);
    setSearchResults([]);
  };
  //--> On click of save btn
  const onSave = () => {
    dispatch({ type: SAVE_CAPITAL, capital: selected });
    history.goBack();
  };

  return (
    <SearchContainer>
      <Navbar />
      <section>
        <div className="input-wrapper">
          <input value={inputText} onChange={onTextChange} />
          <span>
            <img src={ICONS.arrowDown} alt="arrow down" />
          </span>
        </div>
        <ResultWrapper>
          <ul>
            {inputText &&
              searchResults.map((capital, index) => {
                const pattern = new RegExp(inputText, "gi");
                const value = capital.replace(
                  pattern,
                  `<span>${inputText}</span>`
                );

                return (
                  <li key={index} onClick={() => onSelect(capital)}>
                    {ReactHtmlParser(value)}
                  </li>
                );
              })}
          </ul>
        </ResultWrapper>
        {selected ? (
          <div className="save-btn-wrapper">
            <button onClick={onSave}>SAVE</button>
          </div>
        ) : null}
      </section>
    </SearchContainer>
  );
}

export default SearchCapital;

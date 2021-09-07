import React from "react";
import { useSelector } from "react-redux";
import CssLoading from "../../components/CssLoading";
import Navbar from "../../components/Navbar";
import config from "../../config/config";
import useAxios from "../../hooks/use.axios";
import { ICONS } from "../../utils/icons";
import LocalStorageUtils from "../../utils/local.storage";
import { WeatherContainer, Content, WeatherDetail } from "./styles";

function WeatherInfo() {
  const { selectedCapital } = useSelector((state) => state.reducer);

  const [weatherCoord, setWeatherCoord] = React.useState();

  const { axios, error, loading } = useAxios({
    onSuccess: (data) => setWeatherCoord(data),
  });

  //--> Request for weather details
  React.useEffect(() => {
    const localCapital = LocalStorageUtils.getSelectedCapital();
    const capital = selectedCapital ? selectedCapital : localCapital;
    axios({
      url: `?q=${capital}&appid=${config.OPEN_WEATHER_API_KEY}`,
    });
  }, []);
  //-->Format Date obj
  const date = (date, format) => {
    let padToTwo = (number) => (number <= 9 ? `0${number}`.slice(-4) : number);

    const dateObj = new Date(0);
    dateObj.setUTCSeconds(date);

    const hr = padToTwo(dateObj.getHours());
    const min = padToTwo(dateObj.getMinutes());
    if (format === "m") {
      return min;
    } else if (format === "h") {
      return hr;
    } else {
      return `${hr}:${min}`;
    }
  };
  //--> Minify weather 0
  const weather1 = weatherCoord && weatherCoord.weather[0];
  //--> Icon image for different condition
  const WeatherIcon = () => {
    if (weather1 && weather1.main === "Rain") {
      return <img src={ICONS.rainyDay} alt="rainy day" />;
    }
    if (weather1 && weather1.main === "Clouds") {
      return <img src={ICONS.cloudy} alt="cloudy day" />;
    }
    return <img src={ICONS.cloud} alt="cloud day" />;
  };
  return (
    <WeatherContainer>
      <Navbar />
      <Content>
        {weatherCoord != null && !loading ? (
          <React.Fragment>
            <div className="display-time">
              <span>{date(weatherCoord.dt, "h")}</span>
              <span>{date(weatherCoord.dt, "m")}</span>
            </div>
            <h1>{weatherCoord.name}</h1>
            {/* Weather condition Icon  */}
            <div className="weather-icon">
              <WeatherIcon />
            </div>
            {/* Cloud Descriptipon  */}
            <p className="desc">{weather1 && weather1.description}</p>
            {/* Weather details  */}
            <WeatherDetail>
              <img src={ICONS.thermometer} alt="temperature" />
              <span>{(weatherCoord.main.temp - 273.15).toFixed()} °C</span>
            </WeatherDetail>
            <WeatherDetail>
              <img src={ICONS.sunrise} alt="sunrise icon" />
              <span>{date(weatherCoord.sys.sunrise)}</span>
            </WeatherDetail>
            <WeatherDetail>
              <img src={ICONS.sunset} alt="sunset icon" />
              <span>{date(weatherCoord.sys.sunset)}</span>
            </WeatherDetail>
          </React.Fragment>
        ) : error != null ? (
          <p className="error">{error}</p>
        ) : (
          <CssLoading />
        )}
      </Content>
    </WeatherContainer>
  );
}

export default WeatherInfo;

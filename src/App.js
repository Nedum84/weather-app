import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SearchCapital from "./pages/SearchCapital";
import WeatherInfo from "./pages/WeatherInfo";
import reduxStore from "./redux";
import { ROUTES } from "./utils/routes";

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Switch>
          <Route path={ROUTES.home} exact={true} component={Home} />
          <Route path={ROUTES.search} exact={true} component={SearchCapital} />
          <Route path={ROUTES.weather} exact={true} component={WeatherInfo} />
          <Route path={ROUTES.all} render={() => <p>404! Page Not Found</p>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

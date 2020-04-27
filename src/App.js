import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./configs/routes";

function App() {
  return (
    <Router>
      <div hidden>learn react</div>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact
            render={(props) => <route.component {...props} {...route.props} />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

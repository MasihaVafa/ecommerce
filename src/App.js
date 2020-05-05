import React, { Component } from "react";
import Header from "./layout/Header";
import BasePage from "./layout/BasePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MapL from "./layout/map/mapL";
import "./App.css";

import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={BasePage} />
              <Route exact path="/map" component={MapL} />
              {/* <Route exact path="/" component={} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

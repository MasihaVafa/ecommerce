import React, { Component } from "react";
import Header from "./layout/Header";
import Base from "./layout/Base";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./component/products/Products";
import "./App.css";
import Filter from "./component/Filter";
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        {/* <Intro /> */}
        <Filter />
        <Products />

        {/* <Base /> */}
      </Provider>
    );
  }
}

export default App;

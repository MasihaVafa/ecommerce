import React, { Component } from "react";
import Filter from "../component/Filter";
import Products from "../component/products/Products";
export default class BasePage extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Products />
      </div>
    );
  }
}

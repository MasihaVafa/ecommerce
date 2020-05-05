import React, { Component } from "react";
import Filter from "../component/Filter";
import Products from "../component/products/Products";
export default class BasePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-2 ">
            <Filter />
          </div>
          <div className="col-md-10">
            <Products />
          </div>
        </div>
      </div>
    );
  }
}

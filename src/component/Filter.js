import React, { Component } from "react";
import { Select } from "antd";
import "../layout/asset/base.scss";
import { connect } from "react-redux";
import {
  sortStatus,
  sortProducts,
  
} from "../actions/productActions";
const { Option } = Select;
class Filter extends Component {
  state = {
    isLowestToHighest: false
  };

  onChange = e => {
    this.setState(prevState => ({
      isLowestToHighest: !prevState.isLowestToHighest
    }));
    // console.log("the sort status is :" + this.state.isLowestToHighest);
    this.props.sortStatus(this.state.isLowestToHighest);
    this.props.sortProducts(this.props.products, this.state.isLowestToHighest);
  };

  render() {
    return (
      <div className="container">
        <div className="row filterBox d-flex align-items-center bg-light">
          <div className="col-md-4">product count</div>
          <div className="col-md-4">
            <Select
              onChange={this.onChange}
              defaultValue="Lowest to Highest"
              style={{ width: "60%" }}
            >
              <Option value="lowestPrice" name="lowestPrice">
                Lowest to Highest
              </Option>
              <Option value="highestPrice" name="highestPrice">
                Highest to Lowest{" "}
              </Option>
            </Select>
          </div>
          <div className="col-md-4">
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select size"
              // defaultValue={["X", "S", "M", "L", "XL", "XXL"]}
              label="size"
            >
              <Option key={1}>X</Option>
              <Option key={2}>S</Option>
              <Option key={3}>M</Option>
              <Option key={4}>L</Option>
              <Option key={5}>XL</Option>
              <Option key={6}>XXL</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.product.products
});
export default connect(mapStateToProps, {
  sortStatus,
  sortProducts
})(Filter);

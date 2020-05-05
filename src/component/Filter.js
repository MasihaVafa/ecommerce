import React, { Component } from "react";
import { Select, Checkbox, Radio, Slider, Row, Col } from "antd";
import "../layout/asset/base.scss";
import { connect } from "react-redux";
import {
  sortStatus,
  sortProducts,
  filterByPrice,
  filterBySize,
} from "../actions/productActions";
const { Option } = Select;
class Filter extends Component {
  state = {
    value: 1,
    isLowestToHighest: false,
    slider: [1, 150],
    size: "",
    checked: false,
  };

  onChangeSort = (e) => {
    this.setState((prevState) => ({
      value: e.target.value,
      isLowestToHighest: !prevState.isLowestToHighest,
    }));

    this.props.sortStatus(this.state.isLowestToHighest);
    this.props.sortProducts(this.props.products, this.state.isLowestToHighest);
  };

  onChangeSlider = (value) => {
    this.setState({ slider: value }, () => {
      this.props.filterByPrice(this.state.slider);
    });
  };
  onChangeSize = (value) => {
    console.log("clicked is : " + value);

    this.setState({ size: value }, () => {
      this.props.filterBySize(this.state.size);
    });
  };

  render() {
    const marks = {
      0: "0$",
      150: "150$",
    };
    return (
      <div className="container">
        <div className="filterBox  justify-content-md-center">
          <div className="row">
            <div className="col-6 text-center">
              <h6 className="">6</h6> product{" "}
            </div>
            <div className="col-6 text-center">reset </div>
          </div>
          <div className="row headerFilter">
            <div className="col-12 ">Price Sort</div>
          </div>
          <div className="row mt-1">
            <div className="col-md d-flex justify-content-center ">
              <Radio.Group
                onChange={this.onChangeSort}
                value={this.state.value}
              >
                <Radio value={1}>Low To High</Radio>
                <Radio value={2}>High To Low</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="row headerFilter">
            <div className="col-12 ">Price</div>
          </div>
          <div className="row">
            <div className="col-md ">
              <Slider
                onAfterChange={this.onChangeSlider}
                range
                marks={marks}
                defaultValue={[0, 150]}
                tipFormatter={(value) => `${value}$`}
                max={150}
                step={10}
              />
            </div>
          </div>
          <div className="row headerFilter">
            <div className="col-12 ">Size</div>
          </div>
          <div className="row ">
            <div className="col-md d-flex justify-content-center ">
              <Row>
                <Col span={24}>
                  {/* <Checkbox
                        defaultChecked={this.state.checked}
                        key={size}
                        value={size}
                      >
                        {size}
                      </Checkbox> */}
                  <Select
                    onChange={this.onChangeSize}
                    defaultValue="All size"
                    style={{ width: 120 }}
                  >
                    {/* {shirtSizes.map((size) => (
                      <Option value={size}>{size}</Option>
                    ))} */}
                    <Option value="">ALL size</Option>
                    <Option value="S">S</Option>
                    <Option value="M">M</Option>
                    <Option value="L">L</Option>
                    <Option value="XL">XL</Option>
                    <Option value="XXL">XXL</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.product.products,
});
export default connect(mapStateToProps, {
  sortStatus,
  sortProducts,
  filterByPrice,
  filterBySize,
})(Filter);

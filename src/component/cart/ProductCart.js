import React, { Component } from "react";
import "./productCart.scss";
import ProductInCart from "./ProductInCart";
import { connect } from "react-redux";
import { Empty } from "antd";
class ProductCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div className="container py-3">
        {cart.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Empty description={<span>Cart Is Empty </span>} />
          </div>
        ) : (
          [
            cart.map((eachProduct) => (
              <ProductInCart key={eachProduct.id} cartprop={eachProduct} />
            )),
            <button type="button" className="btn btn-success btn-block">
              Total Price is {cart.reduce((acc, val) => acc + val.price, 0)} $
            </button>,
          ]
        )}
      </div>
    );
  }
}
const mapStateToProp = (state) => ({
  cart: state.product.cart,
});
export default connect(mapStateToProp, null)(ProductCart);

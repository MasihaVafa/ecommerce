import React, { Component } from "react";
import { Badge, Icon, Popover } from "antd";
import { connect } from "react-redux";

import ProductCart from "../component/cart/ProductCart";
import "./asset/base.scss";
const text = <span>YOUR CART</span>;

const content = <ProductCart />;
class Navbar extends Component {
  render() {
    const { cart } = this.props;
    return (
      <nav className="navbar  navbar-light bg-light">
        <a className="navbar-brand ml-5">LOGO</a>
        <form className="form-inline">
          {/* popover for cart */}
          <Popover
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
          >
            <Badge count={cart.length}>
              <button className="btn btn-outline-success my-1 my-sm-0">
                <Icon className="navbarIcon" type="shopping-cart" />
              </button>
            </Badge>
          </Popover>
          {/* popover for profile */}
          <Popover
            placement="bottomRight"
            title={text}
            // content={content}
            trigger="click"
          >
            <button className="btn btn-outline-secondary  ml-4 my-1 mr-sm-4">
              <Icon className="navbarIcon" type="user" />
            </button>
          </Popover>
        </form>
      </nav>
    );
  }
}
const mapStateToProp = state => ({
  cart: state.product.cart
});
export default connect(mapStateToProp, null)(Navbar);

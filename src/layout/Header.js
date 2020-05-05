import React, { Component } from "react";
import { Badge, Icon, Popover } from "antd";
import { connect } from "react-redux";
import SiteTitle from "./SiteTitle";
import ProductCart from "../component/cart/ProductCart";
import "./asset/base.scss";
const text = <span>YOUR CART</span>;

const content = <ProductCart />;
class Navbar extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <SiteTitle />
        <nav className="navbar siteNav navbar-light">
          <div className="brand">
            <img src="./Tshirt.png" className="navbar-brand ml-5 logo" />
            <span className="navbar-brand ">SHIRTLAND</span>
          </div>

          <form className="form-inline ">
            {/* popover for cart */}
            <Popover
              placement="bottomRight"
              title={text}
              content={content}
              trigger="click"
            >
              <Badge count={cart.length}>
                <button
                  href="#"
                  className="btn btn-outline-success my-1 my-sm-0"
                >
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
              <button
                href="#"
                className="btn btn-outline-primary  ml-4 my-1 mr-sm-4"
              >
                <span>Login</span>
                <Icon className="navbarIcon" type="user" />
              </button>
            </Popover>
          </form>

          {/* </div> */}
        </nav>
      </div>
    );
  }
}
const mapStateToProp = (state) => ({
  cart: state.product.cart,
});
export default connect(mapStateToProp, null)(Navbar);

import React, { Component } from "react";
import "./productCart.scss";
import { connect } from "react-redux";
import { Icon } from "antd";
import { deleteFromCart } from "../../actions/productActions";
class ProductInCart extends Component {
  OnDeleteClick = id => {
    this.props.deleteFromCart(id);
  };
  render() {
    const { id, image, title, price, color, size } = this.props.cartprop;
    return (
      <div className="container py-3">
        {/* {cart.length === 0 ? <div>empty</div> : <div>not empty</div>} */}

        <div className=" productsInCart">
          <div className="">
            <div className="row ">
              {/* div for delete product from cart */}
              <div
                className="col-sm-0.5 deleteFromCart "
                onClick={this.OnDeleteClick.bind(this, id)}
              >
                <Icon
                  type="close-square"
                  style={{ color: "red", fontSize: "20px" }}
                />
              </div>
              {/* div for product image */}
              <div className="col-sm-4">
                <img src={`/products/${image}_2.jpg`} className="w-100" />
              </div>
              {/* div for title & size & price of product */}
              <div className="col-sm-7.5">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">
                  {color} | {size}
                </p>
                <p className="price text-success">price : {price} $</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteFromCart })(ProductInCart);

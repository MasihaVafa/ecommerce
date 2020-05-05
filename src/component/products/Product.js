import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/productActions";
import { Radio } from "antd";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import "./product.scss";
class Product extends Component {
  // method for add to cart
  onClickCart = () => {
    this.props.addToCart(this.props);
  };

  render() {
    const { key, image, title, desctiption, price, size } = this.props;
    return (
      <div className="productCard">
        <div className="card ">
          <img
            className="card-img"
            src={`/products/${image}_1.jpg`}
            alt={title}
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>

            <p className="card-text ">{desctiption} </p>
            <div className="options d-flex justify-content-center flex-fill">
              <Radio.Group buttonStyle="solid">
                {size.map((availableSize) => (
                  <Radio.Button value={availableSize}>
                    {availableSize}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h5 className="mt-4 text-success">${price}</h5>
              </div>
              <button
                className="btn btn-danger mt-3"
                onClick={this.onClickCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addToCart })(Product);

import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/productActions";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import "./product.scss";
class Product extends Component {
  // method for add to cart
  onClickCart = () => {
    this.props.addToCart(this.props);
    
  };

  render() {
    const { id, image, title, desctiption, price, size } = this.props;
    return (
      <div className="productCard">
        <div className="card">
          <img
            className="card-img"
            src={`/products/${image}_1.jpg`}
            alt={title}
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            {/* <h6 className="card-subtitle mb-2 text-muted">
                Style: VA33TXRJ5
              </h6> */}
            <p className="card-text ">{desctiption} </p>
            <div className="options d-flex flex-fill">
              <select className="custom-select mr-1">
                <option defaultValue>Color</option>
                <option value="1">Green</option>
                <option value="2">Blue</option>
                <option value="3">Red</option>
              </select>
              <select className="custom-select ml-1">
                <option defaultValue>Size</option>
                {size.map(availableSizes => (
                  <option key={id}>{availableSizes}</option>
                ))}
                
              </select>
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

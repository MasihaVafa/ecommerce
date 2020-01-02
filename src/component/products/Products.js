import React, { Component } from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { getProducts, sortProducts } from "../../actions/productActions";

class Products extends Component {
  componentDidMount() {
    // sortingPrice(this.props.products);
    this.props.getProducts();
    // this.props.sortProducts(this.props.getProducts());

    // this.props.sortPruducts(this.props.products, this.state.togglePriceSorting);
  }
  // h = () => {
  //   sortProducts(this.props.products, this.props.isAsc);
  // };

  render() {
    const { products } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div className="col-12 col-sm-8 col-md-6 col-lg-3 mt-4">
                <Product
                  key={product.id}
                  image={product.sku}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  size={product.availableSizes}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  products: state.product.products,
  isAsc: state.product.isLowestToHighest
});
export default connect(mapStateToProp, { getProducts, sortProducts })(Products);

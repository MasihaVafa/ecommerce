import React from "react";
// import FavoriteIcon from "@material-ui/icons/Favorite";

const Product = ({ id, image, title, desctiption, price, size }) => {
  return (
    <div className="card">
      <img className="card-img" src={`/products/${image}_1.jpg`} alt={title} />
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
            {/* <option value="1">41</option>
            <option value="2">42</option>
            <option value="3">43</option> */}
          </select>
        </div>
        <div className=" d-flex justify-content-between align-items-center">
          <div className="price text-success">
            <h5 className="mt-4 text-success">${price}</h5>
          </div>
          <a href="#" className="btn btn-danger mt-3">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;

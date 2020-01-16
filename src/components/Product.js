import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class Product extends Component {
  render() {
    const { title, region, phone, image } = this.props;
    return (
      <div className="card card-body mb-3">
        <img src={image} width="200px" />
        <h4>{title}</h4>

        <ul className="list-group">
          <li className="list-group-item"> Region: {region}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
Product.propType = {
  title: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  Phone: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default Product;

import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Mobile Phone',
        region: 'pune',
        phone: '111-111-111',
        img:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132'
      },
      {
        id: 2,
        title: 'Car',
        region: 'pune',
        phone: '222-222-222',
        img:
          'data:image/jpeg;base64,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'
      },
      {
        id: 3,
        title: 'Computer',
        region: 'pune',
        phone: '333-333-333',
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3-NJ03im0ZoRgujgb5zHWF72mnPv7xXF0GQ--NBRKrvzi429yA&s'
      }
    ]
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        {products.map(product => (
          <Product
            key={product.id}
            // product={product}
            title={product.title}
            region={product.region}
            phone={product.phone}
            image={product.img}
          />
        ))}
      </div>
    );
  }
}

export default Products;

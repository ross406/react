import React, { Component } from 'react';
import Header from './Header';
import Products from './Products';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>This is The Home Page</h1>
        <Products />
      </div>
    );
  }
}

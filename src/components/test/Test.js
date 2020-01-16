import React, { Component } from 'react';
import Header from '../Header';

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;

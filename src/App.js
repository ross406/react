import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HttpService from './services/http-service';
import Test from './components/test/Test';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Product from './components/Product';

const http = new HttpService();
class App extends Component {
  constructor(props) {
    super(props);
    http.getProducts();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <div className="container">
            <Products />
            {/* <Product
              title="Mobile Phone"
              region="pune"
              phone="111-111-111"
              image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132"
            />
            <Product
              title="Car"
              region="pune"
              phone="222-222-522"
              image="data:image/jpeg;base64,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"
            />
            <Product
              title="Computer"
              region="pune"
              phone="333-333-333"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3-NJ03im0ZoRgujgb5zHWF72mnPv7xXF0GQ--NBRKrvzi429yA&s"
            /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

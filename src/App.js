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
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <div className="container">{/* <Products /> */}</div>
        </div>
      </Router>
    );
  }
}

export default App;

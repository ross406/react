import React, { Component } from 'react';
import Header from './Header';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container ">
          <h1 className="text-center mb-5 mt-5">Log In/Sign In</h1>
          <form>
            <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                Email :
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="staticEmail"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password :
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-success btn-lg mt-5 container btn-block"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }
}

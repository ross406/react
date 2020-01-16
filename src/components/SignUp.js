import React, { Component } from 'react';
import Header from './Header';

class SignUp extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="conatiner mr-5 ml-5 mb-5 mt-5">
          <h1 className="text-center">Sign Up/Register</h1>
          <form className="container">
            <div className="row mb-5 mt-5">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
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
            <div className="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Confirme Password :
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Confirme Password"
                />
              </div>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-success btn-lg mt-5 container btn-block"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
export default SignUp;

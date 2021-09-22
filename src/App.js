import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Division from "./Components/Division/Division";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <BrowserRouter>
            <Route
              path="/"
              exact
              component={(props) => (
                <>
                  <Homepage {...props} />
                  <h1>Hi</h1>
                </>
              )}
            />
            <Route path="/division" strict component={() => <Division />} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;

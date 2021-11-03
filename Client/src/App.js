import React from "react";
import Register from "./components/pages/register/register";
import Home from "./components/pages/home/home"
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

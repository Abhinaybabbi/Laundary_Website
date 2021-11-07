import React from "react";
import Register from "./components/pages/register/register";
import Home from "./components/pages/home/home";
import Pastorders from "./components/pastorders/pastorders.js";
import CreatOrder from "./components/pages/order/order";
import Intro from "./components/intopage/Intro"
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Pricing from "./components/intopage/pricing";
import Career from "./components/intopage/career";
import Introone from"./components/intopage/intro1";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/career">
          <Career />
        </Route>
        <Route exact path="/home">
          <Intro />
        </Route>
        {/* <PrivateRoute exact path="/homepage">
          <Introone/>
        </PrivateRoute> */}
        <Route path="/register">
          <Register />
        </Route>
        {/* <PrivateRoute path="/pastorders">
          <Pastorders />
        </PrivateRoute> */}
        <PrivateRoute exact path='/homepage'  component={Introone} />

        <PrivateRoute exact path='/pastorders'  component={Pastorders} />

        <PrivateRoute exact path='/order'  component={CreatOrder} />

        {/* <Route path="/order">
          <CreatOrder />
        </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

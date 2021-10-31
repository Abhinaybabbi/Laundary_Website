
import React from "react";
import Home from "./components/pages/home";
import Register from "./components/pages/register";
import {BrowserRouter,Route, Router,Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
  
      <Route exact path='/'><Home/></Route>
      <Route path='/register'><Register/></Route>
    </BrowserRouter>
    
     
     
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./Screens/Home/Home";
import Detail from "./Screens/Detail/Detail";
import SignUp from "./Screens/SignUp/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Headers/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail/:courseID" component={Detail} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

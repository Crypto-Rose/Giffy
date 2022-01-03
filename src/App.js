import React from "react";
import { Link, Route } from "wouter";
import ListOfGifs from "./pages/ListOfGifs";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListOfGifs} />
        <Route path="/detail/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;

import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import logo from "./images/logo.png";
import SearchGifs from "./pages/SearchGifs";
import StaticContext from "./context/StaticContext";

function App() {
  return (
    <StaticContext.Provider value={{ name: "rose", suscribe: false }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchGifs} />
          <Route path="/detail/:id" component={Detail} />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;

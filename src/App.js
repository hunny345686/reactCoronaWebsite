import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import Corona from "./Corona";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/corona" component={Corona} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

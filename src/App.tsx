import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SectionContainer from "./components/SectionContainer";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </>
    </Router>
  );
}

export default App;

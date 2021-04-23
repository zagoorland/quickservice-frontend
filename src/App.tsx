import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SectionContainer from "./components/SectionContainer";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <Router>
      <>
        <AuthProvider>
          <PrivateRoute path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </AuthProvider>
      </>
    </Router>
  );
}

export default App;

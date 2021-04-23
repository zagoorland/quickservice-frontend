import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

interface IPrivateRoute extends RouteProps {
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
  const user = useContext(AuthContext);
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      ></Route>
    </div>
  );
};

export default PrivateRoute;

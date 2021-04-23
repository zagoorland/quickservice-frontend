import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { isConstTypeReference } from "typescript";
import { AuthContext } from "../contexts/AuthContext";

interface IPrivateRoute extends RouteProps {
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
  const user = useContext(AuthContext);
  console.log(user);
  setTimeout(() => console.log(user), 1000);

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

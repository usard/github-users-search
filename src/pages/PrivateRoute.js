import React from "react";
import { Login } from "../pages";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  return isAuthenticated ? children : <Redirect to="/login"></Redirect>;
};
export default PrivateRoute;

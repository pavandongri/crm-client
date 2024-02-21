import React from "react";
import { Navigate } from "react-router-dom";
import { ServerUrl, isProduction } from '../Url.js';

const PrivateRoute = ({ children }) => {
    const url = (isProduction ? ServerUrl : '') + "/login";
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to={url} />;
}

export default PrivateRoute;

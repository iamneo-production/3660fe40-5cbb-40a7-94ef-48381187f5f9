import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const PrivateRoute = ({component: Component, isAuthorized, ...rest}) => {
    console.log("isAuthorized "+isAuthorized)
    return (
      <Route
        {...rest}
        render={(props) => isAuthorized === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}

export default PrivateRoute;
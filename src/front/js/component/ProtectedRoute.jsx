import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export default function ProtectedRoute(props) {
    const { children, ...routeProps } = props;

    const { store, actions } = useContext(Context);

    const renderRoute = () =>
        store.token ? children : <Redirect to={{ pathname: "/login" }} />;

    return <Route {...routeProps} render={renderRoute} />;
}

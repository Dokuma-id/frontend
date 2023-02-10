import React from "react";
import { Route } from "react-router-dom";
import { Diagnosa } from "../components/Diagnosa";
import Auth from "../views/Auth";
import Home from "../views/Home";
import { TataLaksana } from "../views/TataLaksana";
import PrivateRoute from "./PrivateRoutes"

const Routes = ({placeholder, type, value, change}) => {
    return (
        <React.Fragment>
            <Route exact path = "/login" component={Auth}/>
            <Route exact path = "/" component={Home}/>
            <PrivateRoute exact path = "/diagnosa" component={Diagnosa}/>
            <PrivateRoute exact path = "/tata_laksana" component={TataLaksana}/>
        </React.Fragment>
    )
}


export default Routes
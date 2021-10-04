import React from 'react'
import Home from '../Pages/Home'
import Axios from '../Pages/Axios'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export default function AppRouter() {
    return (
        <Router>

    <Switch>
        <Route  exact path="/Home"  component={Home}/>
        <Route  exact path="/Axios"  component={Axios}/>
        <Route path="*">
            <h1>404 Not Found</h1>
        </Route>
    </Switch>   
</Router>     
    )
}



import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Page_Login from './pages/auth/login';
import Page_Register from './pages/auth/register';
import Page_Personnage from './pages/personnage';
import Page_Personnage_Edit from './pages/edit-personnage';
import Page_Sandbox from './pages/sandbox';

import './App.css';

function App() {

  return (
    <Router>
        <Switch>
            <Route exact path="/personnage/:id">
                <Page_Personnage_Edit/>
            </Route>
            <Route exact path="/sandbox">
                <Page_Sandbox/>
            </Route>
            <Route exact path="/personnage">
                <Page_Personnage/>
            </Route>
            <Route exact path="/register">
                <Page_Register/>
            </Route>
            <Route exact path="/">
                <Page_Login/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

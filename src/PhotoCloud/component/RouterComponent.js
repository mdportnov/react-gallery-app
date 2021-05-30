import React, {Component} from 'react';
import MenuComponent from './MenuComponent';
import AuthService from "../service/AuthService";
import LoginComponent from "./LoginComponent";
import PhotoGalleryComponent from "./PhotoGalleryComponent";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import ProfileComponent from "./ProfileComponent";
import RegisterComponent from "./RegisterComponent";

class AuthenticatedRoute extends Component {
    render() {
        if (AuthService.isUserLoggedIn())
            return <Route {...this.props} />
        else
            return <Redirect to="/login"/>
    }
}

class RouterComponent extends Component {
    render() {
        return (
            <>
                <Router>
                    <header style={{marginTop: "30px"}} className="App-header">
                        <MenuComponent/>
                        <Switch>
                            <Route exact path="/" component={LoginComponent}/>
                            <Route exact path="/login" component={LoginComponent}/>
                            <Route exact path="/profile" component={ProfileComponent}/>
                            <Route exact path="/register" component={RegisterComponent}/>
                            <AuthenticatedRoute exact path="/photos" component={PhotoGalleryComponent}/>
                        </Switch>
                    </header>
                </Router>
            </>
        )
    }
}

export default RouterComponent
import React, {Component} from "react";
import AuthService from "../service/AuthService";
import {Link, withRouter} from 'react-router-dom'
import CssBasLine from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LogoutComponent from "./LogoutComponent";
import logo from '../../logo.png'

class MenuComponent extends Component {
    render() {
        return (<>
                <CssBasLine/>
                <AppBar position="fixed">
                    <Toolbar>
                        <nav
                            className="navbar navbar-expand-md navbar-dark">
                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <img height={'50px'} src={logo}/>
                                <a href="" className="navbar-brand">PhotoCloud</a>
                            </div>
                            <ul
                                style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    flexWrap: "nowrap"
                                }}
                                className="navbar-nav menu-item">
                                {AuthService.isUserLoggedIn() &&
                                <>
                                    <li><Link style={{marginRight: "10px"}} className="nav-link" to="/photos">Your
                                        Photos</Link></li>
                                    <li><Link className="nav-link" to="/profile">Profile</Link></li>
                                </>}
                            </ul>
                            <ul
                                className="navbar-nav justify-content-end menu-item">
                                {!AuthService.isUserLoggedIn() &&
                                <>
                                    <li><Link className="nav-link" to="/login">Login</Link></li>
                                    <li><Link className="nav-link" to="/register">Register</Link></li>
                                </>
                                }
                                {AuthService.isUserLoggedIn() && <LogoutComponent/>}
                            </ul>
                        </nav>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
            </>
        )
    }
}

export default withRouter(MenuComponent)
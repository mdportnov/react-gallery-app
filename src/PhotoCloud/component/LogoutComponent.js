import React, {Component} from 'react'
import {Link} from "react-router-dom";

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <li onClick={this.handleLogout}><Link className="nav-link" to="/login">Logout</Link></li>
            </>
        )
    }

    handleLogout() {
        localStorage.clear();
        window.location.href = "/";
    }
}


export default LogoutComponent
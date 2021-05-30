import React, {Component} from "react";
import AuthService from "../service/AuthService";
import {Typography} from "@material-ui/core";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            username: '',
            password: '',
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault()
        const username = this.state.username;
        const password = this.state.password;

        console.log("post auth : " + username + " " + password)

        AuthService.login(username, password).then(r => {
                console.log(AuthService.isUserLoggedIn());
                return this.goToGallery();
            }
        )
    };

    goToGallery() {
        this.props.history.push("/photos");
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <form className="form-signin"
                          onSubmit={this.handleFormSubmit}>
                        <Typography style={{
                            textAlign: "center",
                            marginBottom: "50px"
                        }} variant={"h4"}>Please login</Typography>
                        <div className="form-group">
                            <input type="text"
                                   name='username'
                                   className="form-control"
                                   placeholder="Username"
                                   value={this.state.username}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                   name='password'
                                   className="form-control"
                                   placeholder="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
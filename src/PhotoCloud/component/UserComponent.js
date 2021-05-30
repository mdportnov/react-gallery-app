import React from "react";
import PropTypes from "prop-types";
import {Card} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

class UserComponent extends React.Component {
    render() {
        const {name, avatar, password, isLoading} = this.props;
        const userDetails = (
            <div>
                <img
                    src={avatar}
                    alt={name}
                    style={{width: "100px"}}
                />
                <h4 className="mb-0">Name: {name}</h4>
                <span className="text-muted">Password: {password}</span>
            </div>
        );
        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
        return (
            <Card
                className="mx-auto mt-4 text-center p-5"
                style={{maxWidth: "300px", minHeight: "250px"}}
            >
                {isLoading ? loadingMessage : userDetails}
            </Card>
        );
    }
}

UserComponent.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    password: PropTypes.string,
    isLoading: PropTypes.bool
};

export default UserComponent;
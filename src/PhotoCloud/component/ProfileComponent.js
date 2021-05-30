import {Component} from "react";
import UserComponent from "./UserComponent";
import AuthService from "../service/AuthService";
import profile from '../../profile.png'

class ProfileComponent extends Component {
    render() {
        return (
            <>
                <UserComponent avatar={profile}
                               name={AuthService.getUserCredentials().username}
                               password={AuthService.getUserCredentials().password}/>
            </>
        )
    }

}

export default ProfileComponent;
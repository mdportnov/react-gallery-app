import {axiosApiInstance} from "./Interceptors";

export const API_URL = 'http://localhost:8762'
export const API_URL_AUTH = `${API_URL}/auth`

export const USER_AUTH_SESSION = 'authorization'
export const USERNAME = 'username'
export const PASSWORD = 'password'

class AuthService {
    login(username, password) {
        const endpoint = `${API_URL_AUTH}/authenticate`;
        return axiosApiInstance.post(endpoint, {
            username: username,
            password: password
        }).then(res => {
            localStorage.setItem(USER_AUTH_SESSION, res.data.token);
            localStorage.setItem(USERNAME, username);
            localStorage.setItem(PASSWORD, password);
            console.log("Auth Token for User: " +
                username + ": " + localStorage.getItem(USER_AUTH_SESSION));
        })
    }

    getJwt() {
        return localStorage.getItem(USER_AUTH_SESSION)
    }

    register(username, password) {
        const endpoint = `${API_URL_AUTH}/register`;
        return axiosApiInstance.post(endpoint, {
            username: username,
            password: password
        })
    }

    getUserCredentials() {
        return {
            username: localStorage.getItem(USERNAME),
            password: localStorage.getItem(PASSWORD)
        }
    }

    isUserLoggedIn() {
        let user = localStorage.getItem(USER_AUTH_SESSION)
        return user !== null;
    }
}

export default new AuthService()

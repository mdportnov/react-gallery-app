import {USER_AUTH_SESSION} from "./AuthService";

const axios = require('axios');
export const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
    function (config) {
        const jwtToken = localStorage.getItem(USER_AUTH_SESSION);
        console.log("interceptor work, current token: " + jwtToken);
        if (jwtToken)
            config.headers["authorization"] = "Bearer " + jwtToken;
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);
import axios from 'axios';

const axiosIntercepter = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        'content-type': 'application/json'
    }
});

axiosIntercepter.interceptors.request.use((config) => {
    // console.log(config);
    return config
}, (error) => {
    console.log(error);
    return error
});

axiosIntercepter.interceptors.response.use((config) => {
    const res = {
        message: "Ok",
        data: config.data
    }
    return res
}, (error) => {
    let res = null;
    if (error.response) {
        res = {
            message: error.response.statusText,
            data: null
        }
    } else {
        res = {
            message: "Network error",
            data: null
        }
    }
    return res
});

export default axiosIntercepter;
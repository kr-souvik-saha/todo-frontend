import axiosIntercepter from "./axiosIntercepter";

export async function login(data) {
    try {
        const response = await axiosIntercepter.post('/user/login', data);
        console.log(response);
        return response;
    } catch (err) {
        return err;
    }
}

export async function allUsers() {
    const response = await axiosIntercepter.get('/user/allUser');

    return response;
}
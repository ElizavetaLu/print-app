import axios from "axios";
const baseURL = 'http://localhost:5050/';

axios.interceptors.request.use((config) => {
    config.headers = { token: localStorage.getItem('token') }
    return config
})



export const signUpFetch = payload => {
    return axios.post(`${baseURL}signUp`, payload)
}

export const logInFetch = payload => {
    return axios.post(`${baseURL}logIn`, payload)
}

export const forgotPasswordFetch = payload => {
    return axios.post(`${baseURL}forgotPassword?email=${payload}`)
}
export const resetPasswordFetch = payload => {
    // return axios.post(`${baseURL}resetPassword?`)
}






export const createNewOrder = (payload) => {
    return axios.post(`${baseURL}createNewOrder`, payload)
}

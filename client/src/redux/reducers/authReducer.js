import { AUTH_USER, AUTH_ERROR, USER_NAME } from "../actions/types";

const initialState = {
    authenticated: '',
    errorMessage: '',
    userName: ''
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_USER:
            return { ...state, authenticated: payload };
        case USER_NAME:
            return { ...state, userName: payload };
        case AUTH_ERROR:
            return { ...state, errorMessage: payload };

        default: return state;
    }
}

export default authReducer
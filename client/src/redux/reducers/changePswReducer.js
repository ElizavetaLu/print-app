import {
    IS_USER_EXIST,
    USER_EMAIL,
    EMAIL_ERROR,
} from "../actions/types";

const initialState = {
    // isExist: false,
    email: '',
    errorMessage: ''
}

const changePswReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_EMAIL:
            return { ...state, email: payload };

        // case IS_USER_EXIST:
        //     return { ...state, isExist: payload };

        case EMAIL_ERROR:
            return { ...state, errorMessage: payload };

        default: return state;
    }
}

export default changePswReducer
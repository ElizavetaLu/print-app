import { SHOW_POPUP, ADD_POPUP_DATA } from "../actions/types";

const initialState = {
    isOpen: false,
    status: false,
    message: ''
}

const popupReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_POPUP:
            return { ...state, isOpen: !state.isOpen };

        case ADD_POPUP_DATA:
            return { ...state, status: payload.status, message: payload.message };

        default:
            return state;
    }
}

export default popupReducer
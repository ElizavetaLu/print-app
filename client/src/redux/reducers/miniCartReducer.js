import { SHOW_CART } from "../actions/types";

const initialState = { isShown: false }

const miniCartReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SHOW_CART:
            return { isShown: !state.isShown }

        default: return state
    }
}

export default miniCartReducer
import { ADD_NEW_ORDER } from '../actions/types';

const initialState = []

const allOrdersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_NEW_ORDER:
            return [...state, ...payload];

        default: return state
    }
}

export default allOrdersReducer
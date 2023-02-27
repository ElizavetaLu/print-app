import {
    ADD_TO_CART,
    DELETE_CART_ITEM,
    INCREASE_ITEM_AMOUNT,
    DECREASE_ITEM_AMOUNT,
    SET_ITEM_AMOUNT,
    CLEAN_UP_CART
} from '../actions/types';

const initialState = []

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            return [...state, payload];

        case DELETE_CART_ITEM:
            return state.filter((item, i) => i !== payload);

        case INCREASE_ITEM_AMOUNT: {
            const item = state.find((item, i) => i === payload)
            item.qty++
            return [...state];
        }

        case DECREASE_ITEM_AMOUNT: {
            const item = state.find((item, i) => i === payload)
            if (item.qty === 1) return state;

            item.qty--;
            return [...state];
        }

        case SET_ITEM_AMOUNT: {
            const item = state.find((item, i) => i === payload.index)
            item.qty = payload.qty
            return [...state];
        }
        case CLEAN_UP_CART:
            return [];

        default: return state
    }
}

export default cartReducer
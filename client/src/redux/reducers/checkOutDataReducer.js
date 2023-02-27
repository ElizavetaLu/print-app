import {
    SET_PROMOCODE,
    SET_SUB_TOTAL,
    SET_PAYMENT_TYPE,
    SET_DELIVERY_TYPE,
    SET_DELIVERY_ADDRESS,
    SET_CONTACT_DETAIL,
    SET_CHECKOUT_RESULT
} from "../actions/types";


const initialState = {
    promocode: '',
    subTotal: '',
    paymentType: '',
    delivery: '',
    deliveryAddress: null,
    contactDetails: null,
    checkoutResult: { status: false, message: "" }
}

const checkOutDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PROMOCODE:
            return { ...state, promocode: payload };

        case SET_PAYMENT_TYPE:
            return { ...state, paymentType: payload };

        case SET_DELIVERY_TYPE:
            return { ...state, delivery: payload };

        case SET_CHECKOUT_RESULT:
            return { ...state, checkoutResult: payload };

        default: return state
    }
}

export default checkOutDataReducer
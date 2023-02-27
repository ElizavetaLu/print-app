import {
    logInFetch,
    signUpFetch,
    checkExistEmailFetch,
    forgotPasswordFetch,
    resetPasswordFetch,
    createNewOrder
} from "../../services";
import {
    AUTH_USER,
    AUTH_ERROR,
    USER_NAME,

    IS_USER_EXIST,
    EMAIL_ERROR,
    USER_EMAIL,


    SHOW_POPUP,
    ADD_POPUP_DATA,


    SET_UPLOADED_IMG_LOCATION,
    SET_SIZE,
    OPEN_SIZE_DROPDOWN,
    SET_TYPE,
    SET_SIDE,
    SET_FABRIC_COLOR,
    SET_FINAL_DESINE,
    SET_ORIGINAL_IMG,
    SET_FINAL_DESINE_FILE,
    SET_ORIGINAL_IMG_FILE,
    SET_ORDER_INDEX,
    CLEAN_UP_ORDER_DATA,

    SHOW_CART,
    ADD_TO_CART,
    DELETE_CART_ITEM,
    INCREASE_ITEM_AMOUNT,
    DECREASE_ITEM_AMOUNT,
    SET_ITEM_AMOUNT,
    CLEAN_UP_CART,

    ADD_NEW_ORDER,

    SET_PROMOCODE,
    SET_PAYMENT_TYPE,
    SET_DELIVERY_TYPE,
    // SET_DELIVERY_ADDRESS,
    // SET_CONTACT_DETAIL,

    SET_CHECKOUT_RESULT,
} from "../actions/types";




//authentication
export const signUp = (signUpData, callback) => async dispatch => {

    try {
        await signUpFetch(signUpData)
            .then(({ data }) => {
                dispatch({ type: AUTH_USER, payload: data.token });
                dispatch({ type: USER_NAME, payload: data.name });

                localStorage.setItem('token', data.token);
                localStorage.setItem('userName', data.name);
                callback();

                window.location.reload();
            })

    } catch (error) {
        dispatch(setAuthError('Email in use'))
    }
}


export const logIn = (logInData, callback) => async dispatch => {

    try {
        await logInFetch(logInData)
            .then(({ data }) => {
                dispatch({ type: AUTH_USER, payload: data.token });
                dispatch({ type: USER_NAME, payload: data.name });

                localStorage.setItem('token', data.token);
                localStorage.setItem('userName', data.name);
                callback();

                window.location.reload();
            })
    } catch (error) {
        dispatch(setAuthError('Invalid login credentials'))
    }
}


export const logOut = (callback) => dispatch => {
    callback();
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    window.location.reload();

    dispatch({ type: USER_NAME, payload: '' });
    dispatch({ type: AUTH_USER, payload: '' });
};

export const setAuthError = errorMessage => ({
    type: AUTH_ERROR,
    payload: errorMessage
})




//forgot password 
export const forgotPassword = email => async dispatch => {
    try {
        await forgotPasswordFetch(email)
            .then(({ data }) => console.log(data))

    } catch (error) {
        console.log(error)
    }
}
export const resetPassword = () => async dispatch => {
    try {
        await resetPasswordFetch()
            .then(({ data }) => console.log(data))

    } catch (error) {
        console.log(error)
    }
}
// export const checkExistEmail = email => async dispatch => {
//     try {
//         await checkExistEmailFetch(email)
//             .then(({ data }) => {
//                 dispatch({ type: USER_EMAIL, payload: email })
//                 dispatch({ type: EMAIL_ERROR, payload: "" })
//             })

//     } catch (error) {
//         dispatch({ type: EMAIL_ERROR, payload: "User with such email doesn't exist" })
//     }
// }



//popup 
export const showPopup = () => ({ type: SHOW_POPUP })

export const setPopupData = popupData => ({
    type: ADD_POPUP_DATA,
    payload: popupData
})





//my orders 
export const addNewOrderToList = newOrder => ({
    type: ADD_NEW_ORDER,
    payload: newOrder
})





// set up order data (constructor)
export const setFinalDesignFile = (imageBase64, index) => async dispatch => {

    dispatch({ type: SET_FINAL_DESINE, payload: imageBase64 });

    try {
        await fetch(imageBase64)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], 'final' + index, { type: "image/png" });
                dispatch({ type: SET_FINAL_DESINE_FILE, payload: file });
            })

    } catch (error) {
        console.log(error)
    }
}

export const setOriginalImgFile = (imageBase64, index) => async dispatch => {

    dispatch({ type: SET_ORIGINAL_IMG, payload: imageBase64 });

    try {
        await fetch(imageBase64)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], 'original' + index, { type: "image/png" });
                dispatch({ type: SET_ORIGINAL_IMG_FILE, payload: file });
            })

    } catch (error) {
        console.log(error)
    }
}

export const cleanOrigImg = () => ({ type: SET_ORIGINAL_IMG, payload: '' })

export const setUploadedImgLocation = data => ({
    type: SET_UPLOADED_IMG_LOCATION,
    payload: data
})

export const openSizeDropdown = () => ({ type: OPEN_SIZE_DROPDOWN })

export const setSize = data => ({
    type: SET_SIZE,
    payload: data
})

export const setColor = data => ({
    type: SET_FABRIC_COLOR,
    payload: data
})

export const setType = data => ({
    type: SET_TYPE,
    payload: data
})
export const setSide = data => ({
    type: SET_SIDE,
    payload: data
})
export const cleanUpOrderData = () => ({ type: CLEAN_UP_ORDER_DATA })





//cart
export const showMiniCart = () => ({ type: SHOW_CART })

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})

export const deleteCartItem = index => ({
    type: DELETE_CART_ITEM,
    payload: index
})

export const increaseItemAmount = index => ({
    type: INCREASE_ITEM_AMOUNT,
    payload: index
})

export const decreaseItemAmount = index => ({
    type: DECREASE_ITEM_AMOUNT,
    payload: index
})

export const setItemAmount = payload => ({
    type: SET_ITEM_AMOUNT,
    payload
})

export const setOrderIndex = index => ({
    type: SET_ORDER_INDEX,
    payload: index
})

export const cleanUpCart = () => ({ type: CLEAN_UP_CART })






//check out actions
export const setPromocode = promocode => ({
    type: SET_PROMOCODE,
    payload: promocode
})
export const setPaymentType = type => ({
    type: SET_PAYMENT_TYPE,
    payload: type
})

export const setDeliveryType = type => ({
    type: SET_DELIVERY_TYPE,
    payload: type
})

export const checkOut = (formData, cart) => async dispatch => {

    try {
        await createNewOrder(formData)
            .then(({ data }) => {
                dispatch({ type: SET_CHECKOUT_RESULT, payload: data })
                dispatch({ type: ADD_POPUP_DATA, payload: data })

                dispatch(addNewOrderToList(cart))
                dispatch(cleanUpCart())
            })

    } catch (error) {
        console.log(error)
        dispatch({ type: SET_CHECKOUT_RESULT, payload: { status: false, message: "Something went wrong. Bla bla bla bla" } })
    }
}


import {
    SET_SIZE,
    OPEN_SIZE_DROPDOWN,
    SET_TYPE,
    SET_SIDE,
    SET_FABRIC_COLOR,
    SET_FINAL_DESINE,
    SET_ORIGINAL_IMG,
    SET_UPLOADED_IMG_LOCATION,
    SET_FINAL_DESINE_FILE,
    SET_ORIGINAL_IMG_FILE,
    SET_ORDER_INDEX,
    CLEAN_UP_ORDER_DATA
} from "../actions/types";

const initialState = {
    index: 0,
    qty: 1,
    size: 'S',
    isSizeOpen: false,
    side: 'front',
    type: 'T-Shirt',
    fabricColor: 'White',
    finalDesign: '',
    originalImg: '',
    finalDesignFile: null,
    originalImgFile: null,
    originalImgLocation: null
}

const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SIZE:
            return { ...state, size: payload };

        case OPEN_SIZE_DROPDOWN:
            return { ...state, isSizeOpen: !state.isSizeOpen };

        case SET_TYPE:
            return { ...state, type: payload };

        case SET_SIDE:
            return { ...state, side: payload };

        case SET_FABRIC_COLOR:
            return { ...state, fabricColor: payload };

        case SET_FINAL_DESINE:
            return { ...state, finalDesign: payload };

        case SET_ORIGINAL_IMG:
            return { ...state, originalImg: payload };

        case SET_UPLOADED_IMG_LOCATION:
            return { ...state, originalImgLocation: payload };

        case SET_FINAL_DESINE_FILE:
            return { ...state, finalDesignFile: payload };

        case SET_ORIGINAL_IMG_FILE:
            return { ...state, originalImgFile: payload };

        case SET_ORDER_INDEX:
            return { ...state, index: payload };

        case CLEAN_UP_ORDER_DATA:

            return {
                index: 0,
                qty: 1,
                size: 'S',
                isSizeOpen: false,
                side: 'front',
                type: state.type,
                fabricColor: 'White',
                finalDesign: '',
                originalImg: '',
                finalDesignFile: null,
                originalImgFile: null,
                originalImgLocation: null
            };

        default: return state;
    }
}

export default orderReducer
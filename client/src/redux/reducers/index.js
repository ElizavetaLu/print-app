import { combineReducers } from "redux";
import checkOutDataReducer from "./checkOutDataReducer";
import allOrdersReducer from "./allOrdersReducer";
import changePswReducer from "./changePswReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import popupReducer from "./popupReducer";
import miniCartReducer from "./miniCartReducer";

const rootReducers = combineReducers({
    auth: authReducer,
    changePsw: changePswReducer,
    popup: popupReducer,
    order: orderReducer,
    allOrders: allOrdersReducer,
    miniCart: miniCartReducer,
    cart: cartReducer,
    checkOutData: checkOutDataReducer,
})

export default rootReducers
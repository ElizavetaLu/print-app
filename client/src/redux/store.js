import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducers from "./reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'main-root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
    persistedReducer,
    {
        auth: { authenticated: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
)

const Persistor = persistStore(store);

export { Persistor };
export default store;



// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// blacklist: ['tracking']
//   }

// const trackingConfig = {
// key: 'tracking',
// storage: AsyncStorage,
// blacklist: ['checkingOut', 'checkingIn', 'searching']
// };

// const rootReducer = combineReducers({
//   tracking: persistReducer(trackingConfig, trackingReducer),
// })

// export default persistReducer(persistConfig, rootReducer)

// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import rootReducers from "./reducers/index";

// const store = createStore(
//     rootReducers,
//     {
//         auth: { authenticated: localStorage.getItem('token'), userName: localStorage.getItem('userName') }
//     },
//     applyMiddleware(reduxThunk),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )

// export default store
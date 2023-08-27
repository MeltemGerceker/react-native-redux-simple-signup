import { combineReducers, legacy_createStore as createStore } from "redux";
import userReducer from './reducers/userReducer';

const defaultReducer = combineReducers({
    userReducer
});

const store = createStore(defaultReducer);

export default store;
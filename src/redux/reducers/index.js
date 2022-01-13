import { combineReducers } from "redux";
import types from "../types";
import items from './items';
import auth from './auth';

const appReducer = combineReducers({
  items,
  auth,
});

const rootReducer = (state, action) => {
    if (action.type == types.CLEARE_REDUX_STATE) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer
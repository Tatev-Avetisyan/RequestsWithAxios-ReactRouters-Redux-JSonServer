import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import usersPerPageReducer from './usersPerPageReducer'

const rootReducer = combineReducers({
    usersReducer,
    usersPerPageReducer,
});

export default rootReducer
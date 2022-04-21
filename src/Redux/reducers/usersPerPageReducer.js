import { ACTION_TYPES } from "../ActionType";
// import { initialState } from "./usersReducer";

 const initialState1 = {
    currentPage:1,
    loading:false,
    error:null,
    totalUsersCount:1,
    pageNumbers:1
}

const usersPerPageReducer = (state = initialState1, {
    type,
    payload
}) => {
    switch (type) {
       
        case ACTION_TYPES.LOADING:
            return {
                ...state,
                loading: payload
            };
        case ACTION_TYPES.ERROR:
            return {
                ...state,
                error: payload
            };
        case ACTION_TYPES.CURRENT_PAGE:
             return {
                ...state,
                currentPage: payload
            };
        case ACTION_TYPES.TOTAL_USERS_COUNT:
                return {
                   ...state,
                   totalUsersCount: payload
               };
        case ACTION_TYPES.PAGENUMBER:
                return {
                   ...state,
                   pageNumbers: payload
               };
        
            default:
                return state
    }

}
export default usersPerPageReducer
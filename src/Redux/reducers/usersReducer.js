import { ACTION_TYPES} from "../ActionType";


 const initialState = {
    users: [],
    user:{}
}

const usersReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ACTION_TYPES.GET_USERS_PER_PAGE:
            return {
                ...state,
                users: payload
            };
        case ACTION_TYPES.ADD:
            return {
                ...state,
                users: [...state.users,{
                    id:payload.id,
                    fullName: payload.fullName,
                    emailAddress: payload.emailAddress
                }]
            };
        case ACTION_TYPES.DELETE:
            const remainedUser = state.users.filter((user) => user.userId !== payload)
            return {
                ...state,
                users: remainedUser
            };
        case ACTION_TYPES.USERDETAILS:
                return {
                    ...state,
                    user: {
                        id:payload.id,
                    fullName: payload.fullName,
                    emailAddress: payload.emailAddress
                    }
                };
        case ACTION_TYPES.EDIT:
            const editUsers = state.users.map((user) => {
                return user.id === payload.id ? {
                    ...user,
                    
                    fullName:payload.fullName,
                    emailAddress:payload.emailAddress

                } : {user}
            })
            return {
                ...state,
                users: editUsers
            };
            default:
                return state
    }

}
export default usersReducer
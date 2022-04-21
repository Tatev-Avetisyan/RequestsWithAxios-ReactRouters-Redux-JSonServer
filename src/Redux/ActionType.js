import axios from "axios"

export const ACTION_TYPES = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    GET_USERS_PER_PAGE: "GET_USERS_PER_PAGE",
    LOADING: "LOADING",
    ERROR: "ERROR",
    CURRENT_PAGE: "CURRENT_PAGE",
    TOTAL_USERS_COUNT: "TOTAL_USERS_COUNT",
    PAGENUMBER: "PAGENUMBER",
    USERDETAILS:"USERDETAILS"

}

export const setPageNumber = (payload) => ({
    type: ACTION_TYPES.PAGENUMBER,
    payload
});

export const setCurrentPage = (payload) => ({
    type: ACTION_TYPES.CURRENT_PAGE,
    payload
});

export const currentpage = (page) => (dispatch) => {
    dispatch(setloading(true))
    return axios.get(`http://localhost:3006/users?_page=${page}&_limit=6&_sort=id&_order=desc`)
        .then(res => {
            dispatch(totalUsersCount(res.headers["x-total-count"]))
            dispatch(setCurrentPage(res.data))
            dispatch(setUsers(res.data))
            dispatch(setloading(false))
        })
        .catch(err => console.log(err))

};


export const setloading = (payload) => ({
    type: ACTION_TYPES.LOADING,
    payload
});


export const setError = (payload) => ({
    type: ACTION_TYPES.ERROR,
    payload
});

export const totalUsersCount = (payload) => ({
    type: ACTION_TYPES.TOTAL_USERS_COUNT,
    payload
});



const setUsers = (payload) => ({
    type: ACTION_TYPES.GET_USERS_PER_PAGE,
    payload
});


export const getAllUsers = () => (dispatch) => {
    dispatch(setloading(true))

    return axios.get(`http://localhost:3006/users?_page=1&_limit=6&_sort=id&_order=desc`)
        .then(res => {
            dispatch(totalUsersCount(res.headers["x-total-count"]))
            dispatch(setUsers(res.data))
            dispatch(setloading(false))
        })
        .catch(err => dispatch(setError(err)))

};



const addUserToReducer = ({
    id,
    fullName,
    emailAddress
}) => ({
    type: ACTION_TYPES.ADD,
    payload: {
        id: id,
        fullName: fullName,
        emailAddress: emailAddress
    }
})
export const addUser = (fullName, emailAddress) => (dispatch) => {
    axios.post(`http://localhost:3006/users`, {
            fullName,
            emailAddress,
        })
        .then(res => {
            dispatch(addUserToReducer(res.data))
            dispatch(setCurrentPage(res.data))
            console.log('current page', setCurrentPage(res.data));
            dispatch(getAllUsers(res.data))
            console.log('res.data', res.data)
        })
        .catch(err => dispatch(setError(err)))

}

export const deleteUserFromReducer = (payload) => ({
    type: ACTION_TYPES.DELETE,
    payload
});
export const deleteUser = (payload) => (dispatch) => {
    axios.delete(`http://localhost:3006/users/${payload}`)
        .then(res => {
            dispatch(deleteUserFromReducer(res.data))
        })
        .catch(err => dispatch(setError(err)))

};
export const userDetailDispacher = (payload) => ({
    type: ACTION_TYPES.USERDETAILS,
    payload
});
export const userDetails = ({id}) => (dispatch) => {
    axios.get(`http://localhost:3006/users/${id}`)
        .then(res => {
            dispatch(userDetailDispacher(res.data))
            console.log("barevvvv",res.data);
        })
        .catch(err => dispatch(setError(err)))

};


const editUserFromReducer = ({
    id,
    fullName,
    emailAddress
}) => ({
    type: ACTION_TYPES.EDIT,
    payload: {
        id,
        fullName,
        emailAddress
    }
});
export const editUser = (id, fullName, emailAddress, ) => (dispatch) => {
    axios.put(`http://localhost:3006/users/${id}`, {
            fullName,
            emailAddress,
        })
        .then(res => {
            dispatch(editUserFromReducer(res.data))
        })
        .catch(err => console.log(err))

};
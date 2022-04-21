// import axios from 'axios'
// import {useState} from 'react'
// import {useCallback} from 'react'
// import {useEffect} from 'react'
// import { useDispatch} from 'react-redux'
// import { ACTION_TYPES} from '../Redux/ActionType'


// export const setUsers = (payload) => ({
//     type: ACTION_TYPES.SET_USERS,
//     payload
// });

// function useFetch() {
//     const [loading, setLoading] = useState(false)
//     const [total, setTotal] = useState(0)
//     const [error, setError] = useState(null)




//     const fetch = useCallback((currentPage, usersPerPage) => {
//         setLoading(true)
//         console.log(currentPage, usersPerPage);
//         axios.get(`http://localhost:3006/users?_start=${(currentPage-1)*usersPerPage}&_end=${currentPage * usersPerPage}`)
//             .then((res) => {
//                 console.log(res.data);
//                 console.log(res.headers["x-total-count"]);
//                 setTotal(res.headers["x-total-count"])

//             })
//             .catch((err) => {
//                 setError(err)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     }, [])

//     return {
//         fetch,
//         total,
//         loading,
//         error
//     }


// }

// export default useFetch
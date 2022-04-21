import React, { useMemo } from 'react'
import classes from '../../Users.module.css'
import {useSelector} from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
// import { currentpage } from '../../Redux/ActionType'


const selectUsersPerPage = ({usersPerPageReducer}) => usersPerPageReducer

function Pagination({paginate}) {
    const navigate = useNavigate();
   
    const {totalUsersCount} = useSelector(selectUsersPerPage)
    const {number} = useParams()
   
   
   
    let pagesCount = useMemo(() => {
        const result = []
        for (let i = 1; i <= Math.ceil(totalUsersCount / 6); i++) {
            result.push(i)
        }

        return result;
    },[totalUsersCount]) 

    const pageNavigator = (page) =>{
        paginate(page)
        navigate(`/users/page/${page}`)}

    return (

        <div>
        <ul className={classes.paginationUl}> {
            pagesCount.map((page,index) => ( 
            <li 
                className={number-1 === index?classes.activePage:classes.paginationLi}
                key={page} 
                onClick = {()=>pageNavigator(page)}>{page}
                
                     
            </li>
           
            ))
        } </ul>
         
        </div>
    )
}

export default Pagination
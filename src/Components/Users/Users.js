import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {currentpage,setPageNumber} from '../../Redux/ActionType'
import CardItem from '../CardItem/CardItem'
import classes from '../../Users.module.css'
import AddUser from '../AddUser/addUser'
import Pagination from '../Pagination/Pagination'
import { useNavigate } from 'react-router-dom'


const selectUsers = ({usersReducer}) => usersReducer
const selectUsersPerPage = ({usersPerPageReducer}) => usersPerPageReducer

const pageLimit = 6

function Users() {
  const dispatch = useDispatch();
  const {loading,pageNumbers,totalUsersCount} = useSelector(selectUsersPerPage)
  const {users} = useSelector(selectUsers)
  const navigate = useNavigate()
  
  


  useEffect(() => {
    //dispatch(getAllUsers())
    dispatch(currentpage(pageNumbers))
   

  }, [dispatch, pageNumbers])
  

  
  if(loading){
    return <h1>...Loading</h1>
  }

  const paginate = (page) =>{
    dispatch(currentpage(page))
    dispatch(setPageNumber(page))
    
  }
  const handlePrevButton = () => {
    if(pageNumbers===1) return
    dispatch(currentpage(pageNumbers-1))
    dispatch(setPageNumber(pageNumbers-1))
    navigate(`/users/page/${pageNumbers-1}`)
  }  

  const handleNextButton = () => {
   if(pageNumbers === Math.ceil(totalUsersCount/pageLimit)) return
    dispatch(currentpage(pageNumbers+1))
    dispatch(setPageNumber(pageNumbers+1))
    navigate(`/users/page/${pageNumbers+1}`)
  } 
  return (
   <>
   <AddUser/>
    <div className = {classes.container}> {users.map((user) => {
        return <CardItem user = {user}
        key = {user.id}/>})} 
    </div>
    <Pagination
    
    paginate = {paginate}
    />
    <button 
    onClick = {handlePrevButton}
    className={classes.paginationButton}> Prev Page </button>
    <button 
    onClick = {handleNextButton}
    className={classes.paginationButton}> Next Page </button>
    </>

  )
}

export default Users
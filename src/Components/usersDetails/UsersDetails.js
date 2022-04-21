
import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
//import {  useNavigate } from 'react-router-dom'
import { currentpage,editUser, userDetails } from '../../Redux/ActionType'
import classes from '../../Users.module.css'



const selectUsers = ({usersReducer}) => usersReducer
const selectUsersPerPage = ({usersPerPageReducer}) => usersPerPageReducer


function UsersDetails() {
  //const navigate = useNavigate()
  const dispatch = useDispatch()
   const { user } = useSelector(selectUsers)
   const { pageNumbers } = useSelector(selectUsersPerPage)
  
  const[fullName,setFullname] = useState(user.fullName);
  const[emailAddress,setEmailAddress] = useState(user.emailAddress);
  const [editButtonVis, setEditButtonVis] = useState(false)

  const handleSave = useCallback(() => {
    dispatch(editUser(user.id, fullName, emailAddress))
     dispatch(currentpage(pageNumbers))
     dispatch(userDetails(user))
    setEditButtonVis(false)
    setFullname('')
    setEmailAddress('')
    
},[dispatch, emailAddress, fullName, pageNumbers, user])
const onEditClickHandler = () => {
  setEditButtonVis(true)
}

  return (
    <div className = {classes.detailItem}>
        <div > 
            <div className = {classes.userInfo} >User's Info</div>
            
            <p className= {classes.textInfo}>User's id:<span className={classes.text}>{user.id}</span></p>
            <p className= {classes.textInfo}>User's Fullname</p>
            <p className={classes.text}>{user.fullName}</p>
            <p className= {classes.textInfo}>User's Email</p>
            <p className={classes.text}>{user.emailAddress}</p> 
           
            <button onClick = {onEditClickHandler}  className={classes.button}> EDIT </button>
            <button  className={classes.button} onClick = {() =>{
              console.log(pageNumbers);
              dispatch(currentpage(pageNumbers))
              // navigate(-1)
              
            }}> 
               <Link to ={`/users/page/${pageNumbers}`}> Back to Users </Link>
            </button>
        </div>
        <div style ={{display:editButtonVis?'block':'none'}}>
                <input 
                    className={classes.inputs}
                    value = {fullName}   
                    onChange = {(e) => setFullname(e.target.value)} 
                    placeholder = "title"
                    type ="text"/>
                <input
                    className = {classes.inputs} 
                    value = {emailAddress}   
                    placeholder="descriptipon"
                    onChange = {(e) => setEmailAddress(e.target.value)} 
                    type="text"/>
                <button 
                    className={classes.btn}  
                    onClick = {() => handleSave()}
                >  Save your Edit
                </button>
        </div>    
    </div>
  )
}

export default UsersDetails
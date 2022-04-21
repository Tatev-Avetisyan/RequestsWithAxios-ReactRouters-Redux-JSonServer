import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { currentpage, deleteUser, userDetails } from '../../Redux/ActionType'
import classes from '../../Users.module.css'

const selectUsersPerPage = ({usersPerPageReducer}) => usersPerPageReducer



function CardItem({user}) {
  const { pageNumbers } = useSelector(selectUsersPerPage)
  const dispatch = useDispatch()
  
//   const[fullName,setFullname] = useState(user.fullName);
//   const[emailAddress,setEmailAddress] = useState(user.emailAddress);
//   const [editButtonVis, setEditButtonVis] = useState(false)

//   const handleSave = useCallback(() => {
//     dispatch(editUser(user.id, fullName, emailAddress))
//     dispatch(currentpage(pageNumbers))
//     setEditButtonVis(false)
    
// },[dispatch, emailAddress, fullName, pageNumbers, user.id])
// const onEditClickHandler = () => {
//   setEditButtonVis(true)
// }

  return (
    <div className = {classes.cardItem}>
        <div > 
            <div className = {classes.userInfo} >User's Info</div>
            
            
            <p className= {classes.textInfo}>User's Fullname</p>
            <p className={classes.text}>{user.fullName}</p>
            <p className={classes.text}>{user.id}</p>
            {/* <p>User's Email</p>
            <p className={classes.span}>{user.emailAddress}</p>  */}
           
            <button className = {classes.button} onClick = {() => {
              dispatch(deleteUser(user.id))
              dispatch(currentpage(pageNumbers))
              }}>DELETE</button>
            
            {/* <button onClick = {onEditClickHandler}  className={classes.button}> EDIT </button> */}
            <button  className={classes.button} onClick = {() => {
              dispatch(userDetails(user))
              
            }}> 
               <Link to ={`/users/user-number-${user.id}`}>  Details </Link>

            </button>
        </div>
        {/* <div style ={{display:editButtonVis?'block':'none'}}>
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
        </div>     */}
    </div>
  )
}

export default CardItem
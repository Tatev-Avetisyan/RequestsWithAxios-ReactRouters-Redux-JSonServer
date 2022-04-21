import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import {useDispatch}from 'react-redux';
import { Link } from 'react-router-dom';
import { addUser } from '../../Redux/ActionType';
import classes from '../../Users.module.css'


//const selectUsers = ({usersReducer}) => usersReducer

function AddUser() {

    const dispatch = useDispatch();
    // const state = useSelector(selectUsers);
    
    const [fullName,setFullname] = useState("");
    const [email,setEmail] = useState("");

    const onAdded=useCallback(()=>{
        if(fullName !=="" && email !==""){
            dispatch(addUser(fullName,email));
        }else{
            alert('Please add your fullname and e-mail ')
        }
        setFullname("");
        setEmail("");
    },[dispatch, email, fullName])


   
  return (
    <div className={classes.addComponent}>
             <button className={classes.addUserBtn} ><Link to = "/add-user"> Add New User </Link> </button>

     </div>
  )
}

export default AddUser
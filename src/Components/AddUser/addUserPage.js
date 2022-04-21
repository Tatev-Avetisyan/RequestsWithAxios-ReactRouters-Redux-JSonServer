import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import {useDispatch}from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../Redux/ActionType';
import classes from '../../Users.module.css'


//const selectUsers = ({usersReducer}) => usersReducer

function AddUserPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
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
        navigate('/users/page/1')

    },[dispatch, email, fullName])


   
  return (
    <div className={classes.addComponent}>
        <label htmlFor = 'add-user'>Add New Todo</label>
            <br/>
            <input
               className={classes.inputs}
               placeholder = "User's FullName" 
               value={fullName} 
               type = "text" 
               id="add-user" 
               onChange = {(e) => {setFullname(e.target.value)}}  
            />

            <input 
                className={classes.inputs}
                placeholder = "E-mail" 
                value={email} 
                type = "text" 
                id="add-user"
                onChange = {(e)=>{setEmail(e.target.value)}}
               
            />
             <button onClick = {onAdded} className={classes.btnAdd} > ADD</button>

     </div>
  )
}

export default AddUserPage
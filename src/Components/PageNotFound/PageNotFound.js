import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../../Users.module.css'

const PageNotFound = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)

    }
  return (
    <div className = {classes.detailItem}>
        <div > 
            <h2 className = {classes.userInfo} >Page Not Found</h2>
            <button onClick = {goBack} className={classes.button}> Back to Users </button>
        </div>
        </div>
  )
}

export default PageNotFound
import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../Users.module.css'

const StartPage = () => {
  return (
    <div className={ classes.startPage}>
        <div>
       <h1> WELCOME </h1>
       <Link to= "/users/page/1">
           Get All Users
       </Link>
       </div>
    </div>

  )
}

export default StartPage
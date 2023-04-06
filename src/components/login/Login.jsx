import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'

const Login = () => {

  const register = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className='login'>
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
          alt="" />
        <Button 
        style={{marginTop: "10px" }} 
        variant='contained' 
        color='primary' 
        onClick={register} >
          Log In
        </Button>
      </div>
    </div>
  )
}

export default Login
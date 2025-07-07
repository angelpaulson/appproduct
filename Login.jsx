import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({ Email: "", password: "" })
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const loginHandler = () => {
    axios.post("http://localhost:3004/login", input)
      .then((res) => {
        alert(res.data.message)
        console.log(res.data.message)
        if (res.data.message === "Logged in successfully") {
          localStorage.setItem('user', JSON.stringify({
          email: res.data.email,  
          name: res.data.name,
          userType: res.data.userType,
          id: res.data.userId
        }))
          
          if (res.data.userType === "admin") {
            navigate("/admin");
          } else {
            navigate("/user");
          }
        }
      })
    //       if (res.data.userType === "admin") {
    //       navigate("/admin" );
    //     } else {
    //       navigate("/user");
    //     }
    //   }
    // })
      .catch((err) => {
        console.log("Login error:", err)
        alert("An error occurred during login")
      })
  }

  return (
    <div>
      <Typography variant='h4'>Login</Typography><br />
      <TextField
        variant='outlined'
        label="Email"
        name="Email"
        value={input.Email}
        onChange={inputHandler}
      /><br /><br />

      <TextField
        variant='outlined'
        label="Password"
        name="password"
        type="password"
        value={input.password}
        onChange={inputHandler}
      /><br /><br />

      <Button variant='contained' onClick={loginHandler}>Login</Button>
    </div>
  )
}

export default Login
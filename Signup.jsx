import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    password: "",
    Phone: ""
  })

  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const signupHandler = () => {
    axios.post("http://localhost:3004/signup", input)
      .then((res) => {
        alert(res.data.message)
        console.log(res.data.message)
          navigate("/login")
      })
  }

  return (
    <div>
      <Typography variant='h4'>Signup</Typography><br />
      
      <TextField
        variant='outlined'
        label="Name"
        name="Name"
        value={input.Name}
        onChange={inputHandler}
      /><br /><br />

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

      <TextField
        variant='outlined'
        label="Phone"
        name="Phone"
        value={input.Phone}
        onChange={inputHandler}
      /><br /><br />

      <Button variant='contained' onClick={signupHandler}>Signup</Button>
    </div>
  )
}

export default Signup

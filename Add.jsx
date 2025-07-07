import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var[input,setinput]=useState({Pname:"",price:"",Disc:"",Image:""})
 var navigate=useNavigate()
 var location=useLocation()
 console.log("loc",location.state)

  const inputHandeler=(e)=>{  
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }

  useEffect(()=>{
    if(location.state !== null){
      setinput({
        ...input,
        Pname:location.state.val.Pname,
        price:location.state.val.price,
        Disc:location.state.val.Disc,
        Image:location.state.val.Image,
      })
    }
  },[])

  const addHandler=()=>{
     if(location.state !== null){
      axios.put("http://localhost:3004/update/"+location.state.val._id,input)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      navigate("/")
     })
    }
     else{
      axios.post("http://localhost:3004/add",input)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      navigate("/")
    })
     }
  }

  return (
    <div>
        <Typography variant='h4'>Add Product</Typography><br />
        <TextField variant='outlined' label="product name"
        name="Pname" value={input.Pname} onChange={inputHandeler} /><br /><br />

         <TextField variant='outlined' label="Price"
         name="price" value={input.price} onChange={inputHandeler}/><br /><br />

          <TextField variant='outlined' label="description"
          name="Disc" value={input.Disc} onChange={inputHandeler}/><br /><br />

           <TextField variant='outlined' label="image"
           name="Image" value={input.Image} onChange={inputHandeler}/><br /><br />

        <Button variant='contained' onClick={addHandler}>add</Button>
    </div>
  )
}

export default Add
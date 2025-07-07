import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>productApp</Typography>&nbsp; &nbsp;
                <Link to="/add">
                <Button variant='contained' color='secondary'>Add</Button>
                </Link> &nbsp;

                <Link to="/">
                <Button variant='contained' color='secondary'>View</Button>
                </Link> &nbsp;

                <Link to="/login">
                <Button variant='contained' color='secondary'>Login</Button>
                </Link> &nbsp;

                <Link to="/signup">
                <Button variant='contained' color='secondary'>Signup</Button>
                </Link> &nbsp;
            </Toolbar>
        </AppBar>
        <br /><br /> <br /><br />
    </div>
  )
}

export default Navbar
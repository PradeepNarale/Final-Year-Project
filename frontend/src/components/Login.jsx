import React from 'react'
import { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleApi = () => {

        console.log(username, password)
        axios.post('https://reqres.in/api/register', {
            username: username,
            password: password,
        })
            .then(result => {

                console.log(result.data)
                if (result.status === 200)
                    toast.success("Login Successfully!");

            })
            .catch(err => {
                console.log(err)
                console.log(err.result)
                if (err.status != 200)
                    toast.error("Something is Wrong");

            })



    }

    return (
        <div className= 'mb-5 ' >
            <form>
                <Box display="flex"
                    flexDirection={"column"}
                    maxWidth={400} alignItems="center"
                    justifyContent={'center'}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc'
                        }
                    }}>


                    <Typography variant='h3' padding={3} textAlign="center">LOGIN</Typography>
                    <img
          className="inline-block h-25 w-25 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
                    <TextField value={username} onChange={handleUsername} margin='normal' type={'text'} id="outlined-basic" label="Username" variant="outlined" />
                    <TextField value={password} onChange={handlePassword} margin='normal' type={'password'} id="outlined-basic" label="Password" variant="outlined" />

                    <Button onClick={handleApi} sx={{ marginTop: 3, borderRadius: 3 }} variant="contained" color='warning'>Login</Button><ToastContainer />
                    <div className='mt-4 mb-3'>
                        <FacebookSharpIcon fontSize="large" />
                        <GitHubIcon fontSize="large" />
                        <GoogleIcon fontSize="large" />
                    </div>
                    <Divider>OR</Divider>
                    <Button sx={{ marginTop: 2, borderRadius: 3 }} ><Link to="/signin">
                        Need An Account? Sign In
                    </Link>
                    </Button>
                </Box>

            </form>
        </div >
    )
}

export default Login

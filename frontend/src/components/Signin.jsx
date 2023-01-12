import React from 'react'
import { Divider, Box, Button, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Signin = () => {

    return (
        <div>
            <form>
                <Box display="flex"
                    flexDirection={"column"}
                    maxWidth={450} alignItems="center"
                    justifyContent={'center'}
                    margin="auto"
                    marginTop={5}
                    marginBottom={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc'
                        }
                    }}>


                    <Typography variant='h3' padding={3} textAlign="center">Sign In</Typography>

                    <TextField fullWidth margin='normal' type={'text'} id="outlined-basic" label="Full Name" variant="outlined" />
                    <TextField fullWidth margin='normal' type={'email'} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField fullWidth margin='normal' type={'phone'} id="outlined-basic" label="Phone No" variant="outlined" />
                    <TextField fullWidth margin='normal' type={'password'} id="outlined-basic" label="Password" variant="outlined" />
                    <Button  sx={{ marginTop: 3, borderRadius: 3 }} variant="contained" color='warning'>SignIn</Button> 
                    <Button sx={{ marginTop: 3, marginBottom: 3, borderRadius: 3 }} ><Link to="/login">Alrady Have An Account? Login IN </Link></Button>  
                    <Divider>OR</Divider>
                    <div className='mt-3'>
                        <FacebookSharpIcon fontSize="large"/>
                        <GitHubIcon fontSize="large"/>
                        <GoogleIcon fontSize="large"/>
                    </div>

                </Box>

            </form>
        </div >
    )
}

export default Signin

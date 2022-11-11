import React from 'react'
import {  Box, Button, TextField, Typography, } from "@mui/material"
import "./contact.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const Contact = () => {
    return (

        <div className='mb-5 '>
            
            
            <Box display="flex"
                flexDirection={"column"}
                maxWidth={1100} alignItems="center"
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


                <Typography variant='h3' padding={3} textAlign="center">GET IN TOUCH</Typography>
                <Row>
                    <Col>   <TextField sx={{ width: { sm: 50000, md: 300 } }} margin='normal' type={'text'} id="outlined-basic" label="Your Name" variant="outlined" /></Col>
                    <Col><TextField sx={{ width: { sm: 50000, md: 300 } }} margin='normal' type={'email'} id="outlined-basic" label="Your Email" variant="outlined" /></Col>
                    <Col><TextField sx={{ width: { sm: 50000, md: 300 } }} margin='normal' type={'Phone'} id="outlined-basic" label="Your Phone Number" variant="outlined" /></Col>
                </Row>
                <Row>
                    <Col>
                        <TextField multiline rows={5} fullwidth sx={{
                            width: { sm: 1100, md: 950 }
                        }} margin='normal' type={'text'} id="outlined-basic" label="Message" variant="outlined" /></Col>
                </Row>
                <Button sx={{ marginTop: 3, borderRadius: 3 }} variant="contained" color='primary'>Send Message</Button>

            </Box>
        </div>

    )
}

export default Contact

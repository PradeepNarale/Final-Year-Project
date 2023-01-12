import React from 'react'
import { Box, Button, TextField, Typography, } from "@mui/material"
import "./contact.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const Contact = () => {
    return (

        <div className='mb-5 '>
            <div className='container'>
                <Row className='text-center'>
                    <Col>
                        <Box display="flex"
                            flexDirection={"column"}
                            maxWidth={500}
                            alignItems="center"
                            justifyContent={'center'}
                            margin="auto"
                            marginTop={3}
                            padding={1}
                            borderRadius={5}
                            boxShadow={'5px 5px 10px #ccc'}
                            sx={{
                                ":hover": {
                                    boxShadow: '10px 10px 20px #ccc'
                                }
                            }}>
                            <HiLocationMarker className='text-center' color="black" size={35} />
                            <Typography style={{ fontWeight: 'bold' }} variant='h5' padding={1} textAlign="center"> ADDRESS</Typography>
                            <Typography padding={1} textAlign="center"> Lorem ipsum dolor sit amet consectetur.</Typography>
                        </Box>
                    </Col>
                    <Col><Box display="flex"
                        flexDirection={"column"}
                        maxWidth={500}
                        alignItems="center"
                        justifyContent={'center'}
                        margin="auto"
                        marginTop={3}
                        padding={1}
                        borderRadius={5}
                        boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            ":hover": {
                                boxShadow: '10px 10px 20px #ccc'
                            }
                        }}>
                        <BsFillTelephoneFill className='text-center' color="black" size={35} />
                        <Typography style={{ fontWeight: 'bold' }} variant='h5' padding={1} textAlign="center"> PHONE NUMBER</Typography>
                        <Typography padding={1} textAlign="center"> Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Box></Col>
                    <Col><Box display="flex"
                        flexDirection={"column"}
                        maxWidth={500}
                        alignItems="center"
                        justifyContent={'center'}
                        margin="auto"
                        marginTop={3}
                        padding={1}
                        borderRadius={5}
                        boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            ":hover": {
                                boxShadow: '10px 10px 20px #ccc'
                            }
                        }}>
                        <FaFax className='text-center' color="black" size={35} />
                        <Typography style={{ fontWeight: 'bold' }} variant='h5' padding={1} textAlign="center"> FAX</Typography>
                        <Typography padding={1} textAlign="center"> Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Box></Col>
                    <Col><Box display="flex"
                        flexDirection={"column"}
                        maxWidth={500}
                        alignItems="center"
                        justifyContent={'center'}
                        margin="auto"
                        marginTop={3}
                        padding={1}
                        borderRadius={5}
                        boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            ":hover": {
                                boxShadow: '10px 10px 20px #ccc'
                            }
                        }}>
                        <MdEmail className='text-center' color="black" size={35} />
                        <Typography style={{ fontWeight: 'bold' }} variant='h5' padding={1} textAlign="center"> EMAIL</Typography>
                        <Typography padding={1} textAlign="center"> Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Box></Col>
                </Row>
            </div>




            <Box display="flex"
                flexDirection={"column"}
                maxWidth={1100}

                alignItems="center"
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
                    <Col> <TextField sx={{ width: { sm: 50000, md: 300 } }} margin='normal' type={'text'} id="outlined-basic" label="Your Name" variant="outlined" /></Col>
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

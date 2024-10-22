import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useStyles } from './registerStyles.js'
import { userRegistration } from '../../services/admin'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [registrationDetails, setRegistrationDetails] = useState({ name: "", email: "", password: "" })

  const handleRegister = async () => {
    if (registrationDetails.email === "" || registrationDetails.password === "" || registrationDetails.name === "") {
      toast.error("Please enter name, email and password!")
    }
    else {
      let res = await userRegistration(registrationDetails)
      if (res?.status) {
        toast.success(res.message)
        navigate("/login")
      }
    }

  }

  return (
    <>
      <Box component="section" className={classes.registrationContainer} >
        <Box component="section" className={classes.registrationBox}>
          <Box component="section" className={classes.registrationBoxLogo}>
            <img className={classes.registrationBoxLogoImg} src={Logo} alt="User_logo" />
          </Box>

          <Box component="section" className={classes.registrationBoxInputs}>
            <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>CREATE NEW ACCOUNT</Typography>
            <TextField type='text' id="Name" label="Name" variant="outlined" placeholder='Enter your name' 
            onChange={(e) => setRegistrationDetails({ ...registrationDetails, name: e.target.value })} required/>
            <TextField type='email' id="Email" label="Email" variant="outlined" placeholder='Enter your email' 
            onChange={(e) => setRegistrationDetails({ ...registrationDetails, email: e.target.value })} required />
            <TextField type='password' id="Password" label="Password" variant="outlined" placeholder='Enter your password' 
            onChange={(e) => setRegistrationDetails({ ...registrationDetails, password: e.target.value })} required/>
            <Button variant="contained" className={classes.registrationBoxInputsBtn} onClick={handleRegister}>Register</Button>
          </Box>
        </Box>
        <Typography>
          Already have an account ? <span><Link to="/login">Login</Link></span>
        </Typography>
      </Box>
    </>
  )
}

export default Register
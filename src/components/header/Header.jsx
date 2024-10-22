import React from 'react'
import { useStyles } from './headerStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const classes = useStyles()

    const navigate = useNavigate()

    const handleHome = async () => {
        navigate('/dashboard')
    }
    
    const handleLogout = async () => {
        navigate('/login')
    }

    return (
        <>
            <Box component="section" className={classes.headerContainer}>
                <Button variant="contained" className={classes.homeBtn} onClick={handleHome}>Home</Button>
                <Button variant="contained" className={classes.logoutBtn} onClick={handleLogout} >Logout</Button>
            </Box>
        </>
    )
}
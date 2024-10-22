import React, { useEffect, useState } from 'react'
import { useStyles } from './dashboardStyles'
import { Box, Button } from '@mui/material'
import Card from '../card/Card'
import { Header } from '../header/Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../services/user'

export const Dashboard = () => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        allPosts()
    }, [])

    const allPosts = async () => {
        let res = await getAllPosts(user?.token, user?.existingUser?._id)
        console.log(res.post, "post")
        setPosts(res?.post)
    }
    const handlePost = async () => {
        navigate('/post')
    }
    return (
        <>
            <Box component="section" className={classes.dashboardContainer}>
                <Header />
                <Box className={classes.dashboard}>
                    <Button variant="contained" className={classes.addImageBtn} onClick={handlePost}>Add Image</Button>
                    <Card className={classes.cardContainer} posts={posts} />
                </Box>
            </Box>
        </>
    )
}

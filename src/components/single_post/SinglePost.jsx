import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import Card from '../card/Card'
import { Header } from '../header/Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../services/user'
import { useParams } from 'react-router-dom'

export const SinglePost = () => {
    // const classes = useStyles()
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    const { id } = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        allPosts()
    }, [])

    const allPosts = async () => {
        
        let res = await getAllPosts(user?.token, user?.existingUser?._id)
        let filteredPost = res?.post?.filter((pst) => pst._id == id)
        setPosts(filteredPost)
    }

    return (
        <>
            <Box component="section" >
                <Header />
                <Box >
                    <Card posts={posts} />
                </Box>
            </Box>
        </>
    )
}

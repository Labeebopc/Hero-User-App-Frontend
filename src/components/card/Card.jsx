import React from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Box, Button } from "@mui/material";

const CustomCard = ({ posts }) => {

    const handleShare = (post) => {
        const shareUrl = `${window.location.origin}/post/${post._id}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied to clipboard!');
        })

    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Box
                sx={{
                    maxHeight: "80vh",
                    overflowY: "auto",
                    width: 320,
                }}
            >
                {posts?.length > 0 ? (
                    posts?.map((post, index) => (
                        <Card
                            key={index}
                            elevation={3}
                            sx={{
                                width: 300,
                                borderRadius: 2,
                                marginBottom: 2,
                            }}
                        >
                            <CardHeader
                                title={post?.author || "Unknown Author"}
                                subheader={post?.date}
                            />
                            <CardMedia
                                component="img"
                                height="100"
                                image={post?.postImage}
                                alt="post image"
                            />
                            <CardActions>
                                <Typography variant="body2" color="text.secondary">
                                    {post?.likes} likes
                                </Typography>
                            </CardActions>
                            <CardActions>
                                <Button variant="contained" onClick={() => handleShare(post)}>Share</Button>
                            </CardActions>
                        </Card>
                    ))
                ) : (
                    <Typography>No Posts Sorry, Add new Posts</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CustomCard;

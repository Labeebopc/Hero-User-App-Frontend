import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from 'react-file-base64'

import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
import './form.css';
import { Header } from "../header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { createNewPost } from "../../services/user";

const Form = () => {
    const [form, setForm] = useState({ postImage: "" });
    const navigate = useNavigate();
    const isAllInputsValied = form.postImage.length;
    const [isValid, setIsValied] = useState(true);
    const { user } = useSelector(state => state.user)


    const handlePost = async (e) => {
        e.preventDefault();

        if (form?.postImage?.length == 0) {
            setIsValied(false)
            return
        } else {
            setIsValied(true)
        }

        try {
            await createNewPost(user?.token, form, user?.existingUser?._id);
            navigate("/dashboard");
        } catch (error) {
            console.error("Error creating post:", error);

        }
    };

    return (
        <>
            <Header />
            <form className="form" onSubmit={handlePost}>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Add a Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FileBase64
                            multiple={false}
                            onDone={(base64) => setForm({ ...form, postImage: base64 })}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        // onClick={handlePost}
                        >
                            Post
                        </Button>

                        {
                            !isValid &&
                            <div style={{ color: "red", marginTop: "10px" }}>All fields are mandatory</div>
                        }
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default Form;

import React from "react"
import { Card, CardContent, Grid, TextField, Typography, Button, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        descripcion: '',
    });

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const res = await fetch('http://localhost:3000/task', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        
        navigate('/')
    }

    const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value })
    

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justifyContents='center'
        >
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }} style={{
                        backgroundColor: '#1e272e',
                        padding: '1rem'
                    }}
                >
                    <Typography variant="5" textAlign="center" color="white">
                        Create Task
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="title"
                                onChange={handleChange}
                                variant="filled"
                                label="Escribe el titulo"
                                sx={{
                                    display: 'block',
                                    margin: '0.5rem'
                                }}
                                inputProps={{ style: { color: "white" } }}
                                inputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                name="descripcion"
                                onChange={handleChange}
                                variant="filled"
                                label="Escribe la descripcion"
                                multiline
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '0.5rem'
                                }}
                                inputProps={{ style: { color: "white" } }}
                                inputLabelProps={{ style: { color: "white" } }}
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                type='submit'
                                disabled={!task.title || !task.descripcion}
                                >
                                {loading ? (<CircularProgress
                                    color="inherit"
                                    size={24} />) : ('Guardar')}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
}
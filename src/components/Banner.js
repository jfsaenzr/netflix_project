import React, { useEffect, useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import requests from '../Requests';

const Banner = () => {
    const classes = useStyles();
    const [movie, setMovie] = useState([])

    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)}...` : string

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            const random = Math.floor(Math.random() * request.data.results.length - 1)
            setMovie(request.data.results[random])
            return request
        };
        fetchData();
    }, [])

    return (
        <div className={classes.root} style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            position: "relative",
            height: "700px",
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
        }}>
            <div className={classes.content}>
                <Typography variant="h2" component="h1">
                    {movie?.title || movie?.name || movie?.original_name}
                </Typography>
                <div className={classes.buttons}>
                    <Button>Reproducir</Button>
                    <Button>Mi lista</Button>
                </div>
                <Typography style={{ wordWrap: "break-word", width: "500px" }} variant="h6" className={classes.description}>
                    {truncate(movie?.overview, 160)}
                </Typography>
            </div>
            <div className={classes.fadeBottom} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    content: {
        position: "absolute",
        bottom: 100,
        left: 40,
    },
    buttons: {
        "& button": {
            cursor: "pointer",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "5px",
            padding: theme.spacing(1, 4, 1, 4),
            marginRight: "1rem",
            backgroundColor: "rgba(51,51,51,0.5)"
        },
        "& button:hover": {
            color: "#000",
            backgroundColor: "#e6e6e6"
        }
    },
    fadeBottom: {
        position: "absolute",
        top: "53vh",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    },

}));

export default Banner;

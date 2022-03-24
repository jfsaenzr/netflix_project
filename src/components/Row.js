import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    //console.log(movies.map((movie) => movie))
    //console.log("fetchUrl" + fetchUrl)

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        };
        fetchData();
    }, [fetchUrl])

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.title}>{title}</Typography>
            <div className={classes.posters}>
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <div>
                                <img
                                    className={`${classes.poster} ${isLargeRow && classes.posterLarge}`}
                                    key={movie.id}
                                    src={`${base_url}${isLargeRow ? movie.poster_path : movie?.backdrop_path}`}
                                    alt={movie?.name}
                                    labels={movie?.name}
                                />
                                <p className={classes.name}>{movie?.name} {movie?.title}</p>
                            </div>

                        )
                )}

            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        marginLeft: theme.spacing(4)
    },
    posters: {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    poster: {
        maxHeight: "12rem",
        objectFit: "contain",
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(1),
        transition: "transform 450ms",
        "&:hover": {
            transform: "scale(1.25)",
        }
    },
    posterLarge: {
        maxHeight: "15rem",
        marginTop: theme.spacing(3),
        "&:hover": {
            transform: "scale(1.25)"
        }
    },
    title: {
        padding: "60px 0px 0px 0px"
    },
    name: {
        marginLeft: theme.spacing(1)
    }
}));

export default Row;

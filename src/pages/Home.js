import React from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Banner />
            <Row title="Populares en Netflix" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Tendencias" fetchUrl={requests.fetchTopRated} />
            <Row title="Películas acción" fetchUrl={requests.fetchActionMovies} />
            <Row title="Películas comedia" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Películas terror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Películas románticas" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentales " fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

export default Home

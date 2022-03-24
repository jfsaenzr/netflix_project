import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import netflixAvatar from "../imagenes/avatar.png";
import Plans from '../components/Plans';
import { NetflixButton } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useHistory } from 'react-router';

const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const signout = () => {
        auth.signOut();
        history.push("/login")
    }
    return (
        <div className={classes.root}>
            <Header />
            <Typography variant='h3' gutterBottom>Editar perfil</Typography>
            <div className={classes.info}>
                <img src={netflixAvatar} alt="avatar" />
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant='h6'>email usuario</Typography>
                        <Typography className={classes.plansText} variant='h5' gutterBottom>Plans</Typography>
                        <Plans cost={7.99}>Netflix Standard</Plans>
                        <Plans cost={11.99}>Netflix Basic</Plans>
                        <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
                        <NetflixButton onClick={signout} wide="fullWidth">Salir</NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    info: {
        width: "80%",
        display: "flex",
        "& img": {
            height: "100px",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            }
        }
    },
    details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: "18px"
        }
    },
    plans: {
        width: "100%"
    },
    plansText: {
        borderBottom: "1px solid lightgray"
    }
}));

export default Profile

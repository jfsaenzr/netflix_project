import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { useHistory } from 'react-router';

const SignUp = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(authUser => history.push("/"))
            .catch((err => alert(err.message)))
    }
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(authUser => history.push("/"))
            .catch((err => alert(err.message)))
    }

    return (
        <div className={classes.root}>
            <Typography variant='h5' align="left">
                Inicia sesión
            </Typography>
            <form className={classes.form}>
                <NetflixInput
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={classes.email} />
                <NetflixInput
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className={classes.password} />
                <NetflixButton
                    onClick={signIn}
                    type="submit"
                    wide="medium"
                    radius>
                    Iniciar sesión
                </NetflixButton>
                <Typography variant='subtitle2'>
                    ¿Primera vez en Netflix? {" "}
                    <span className={classes.signupLink} onClick={register}>
                        Suscríbete ya. {" "}
                    </span>
                </Typography>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    form: {
        width: "80%"
    },
    email: {
        marginBottom: theme.spacing(2)
    },
    password: {
        marginBottom: theme.spacing(4)
    },
    signupLink: {
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline"
        }
    }

}));

export default SignUp

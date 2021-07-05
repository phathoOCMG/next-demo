
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useUser from "../lib/useUser";
import React, { Component, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { createContext, useContext } from 'react';
import { LinearProgress } from '@material-ui/core';

const AppContext = createContext();

const classes = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function Login(props) {
    // here we just check if user is already logged in and redirect to profile
    const { mutateUser } = useUser({
        redirectTo: "/list_mail",
        redirectIfFound: true,
    });

    const router = useRouter()
    const user = props?.user;


    const [error, setEerror] = useState('');
    const [loadding, setLoading] = useState(false);
    const [error_pass, setEerrorPass] = useState('');
    const [validate, setValidate] = useState(false);

    const changeValue = function (e, type) {
        const value = e.target.value;
        const nextState = {};
        if (type == 'email') {
            if (value.length < 8) {
                setEerror('Phải lớn hơn 8 ký tự')
                return;
            } else {
                setEerror('')
            }
        }

        if (type == 'password') {
            if (value.length < 8) {
                setEerrorPass('Phải lớn hơn 8 ký tự');
                return;
            } else {
                setEerrorPass('');
            }
        }
        setValidate(true);
    }
    const userLogin = async event => {
        event.preventDefault()
        if (validate) {
            setLoading(true);
            let email = event.target.email.value;
            let password = event.target.password.value;
            try {
                // await axios.get('http://216.198.92.205/mail_ebay/Thongke/get_list/2021-07-02').data
                mutateUser({
                    "isLoggedIn": true,
                    "login": "222",
                    "id":123,
                    "avatarUrl": "https://avatars.githubusercontent.com/u/28282761?v=4"
                  });
            } catch (error) {
                console.error("An unexpected error happened:", error);
            }

            // router.push('/list_mail',  undefined, { shallow: true });
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            {loadding &&
                <LinearProgress color="secondary" />
            }

            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={userLogin} >
                    <TextField
                        onChange={e => changeValue(e, 'email')}
                        variant="outlined"
                        margin="normal"
                        required
                        error={error == '' ? false : true}
                        fullWidth
                        id="email"
                        type="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onChange={e => changeValue(e, 'password')}
                        error={error_pass == '' ? false : true}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* <Box mt={8}>
                <Copyright />
            </Box> */}
        </Container>
    );

}
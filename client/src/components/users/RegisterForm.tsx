import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const defaultTheme = createTheme();

export default function RegisterForm() {

  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
    firstName:"",
    lastName:""
  });

  function setUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }

  function setUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }

  function setUserFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, firstName: event.target.value });
  }

  function setUserLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, lastName: event.target.value });
  }

  const navigate = useNavigate();

  function onClickHandler() {
    const endpoint = "deploy-7clzd9081-eduulisboa.vercel.app/users";

    axios
      .post(endpoint, userInformation)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setUserInformation({ password: "", email: "", firstName: "", lastName: "" });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={onClickHandler} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              value={userInformation.firstName}
              onChange={setUserFirstName}
            />
            <TextField
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              value={userInformation.lastName}
              onChange={setUserLastName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userInformation.email}
              onChange={setUserEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userInformation.password}
              onChange={setUserPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClickHandler}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link>
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
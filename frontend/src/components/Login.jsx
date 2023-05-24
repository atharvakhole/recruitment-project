import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import serverUrl from "../config/backend-url";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, metadata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
  };

  if (metadata && metadata.touched && metadata.error) {
    configTextfield.error = true;
    configTextfield.helperText = metadata.error;
  }

  return <TextField {...configTextfield} />;
};

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorState, setErrorState] = useState(false);

  const INITIAL_FORM_STATE = {
    username: "",
    password: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const auth = useAuth();
  const navigate = useNavigate();
  let response;

  const handleLogin = async (data) => {
    try {
      response = await axios.post(`${serverUrl}/login`, {
        username: data.username,
        password: data.password,
      });

      console.log(response.data);
      auth.login({
        username: response.data.username,
        role: response.data.role,
        token: response.data.token,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
      navigate("/");
    } catch (error) {
      setErrorState(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleLogin}
        >
          <Form>
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              error={errorState}
              helperText={errorMessage}
            />
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;

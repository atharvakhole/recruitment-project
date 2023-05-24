import {
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
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

const RecruiterPanel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorState, setErrorState] = useState(false);

  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    companyName: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
  });

  const auth = useAuth();
  const navigate = useNavigate();
  let response;

  const handleRecruiterRegistration = async (data) => {
    try {
      response = await axios.post(`${serverUrl}/recruiters`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        password: data.password,
        companyName: data.companyName,
      });

      console.log(response);
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
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleRecruiterRegistration}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldWrapper
                margin="normal"
                required
                id="firstName"
                label="FirstName"
                name="firstName"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextFieldWrapper
                margin="normal"
                required
                id="lastName"
                label="LastName"
                name="lastName"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                error={errorState}
                helperText={errorMessage}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                name="companyName"
                label="Company Name"
                id="companyName"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

const CandidatePanel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorState, setErrorState] = useState(false);

  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const auth = useAuth();
  const navigate = useNavigate();
  let response;

  const handleCandidateRegistration = async (data) => {
    try {
      response = await axios.post(`${serverUrl}/candidates`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        password: data.password,
      });

      console.log(response);
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
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleCandidateRegistration}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldWrapper
                margin="normal"
                required
                id="firstName"
                label="FirstName"
                name="firstName"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextFieldWrapper
                margin="normal"
                required
                id="lastName"
                label="LastName"
                name="lastName"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                error={errorState}
                helperText={errorMessage}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

const Register = () => {
  const [view, setView] = useState("candidate");
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
          Register
        </Typography>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ButtonGroup fullWidth>
            <Button
              variant={view === "candidate" ? "contained" : "outlined"}
              onClick={() => {
                setView("candidate");
              }}
            >
              Candidate
            </Button>
            <Button
              variant={view === "recruiter" ? "contained" : "outlined"}
              onClick={() => {
                setView("recruiter");
              }}
            >
              Recruiter
            </Button>
          </ButtonGroup>
          {view === "candidate" ? <CandidatePanel /> : <RecruiterPanel />}
        </Box>
      </Box>
    </Container>
  );
};

export default Register;

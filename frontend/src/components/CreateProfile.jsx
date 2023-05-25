import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import serverUrl from "../config/backend-url";
import skillData from "../assets/output";
import { MultiSelect } from "react-multi-select-component";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Toolbar } from "@mui/material";
import imageCreate from "../assets/image-create.png";

const options = [];

skillData.map(({ values }) => {
  values.forEach((value) => {
    const item = { value: value, label: value };
    options.push(item);
  });
  return options;
});

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

const CreateProfile = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [selected, setSelected] = useState([]);

  const INITIAL_FORM_STATE = {
    university: "",
    degree: "",
    skills: [],
  };

  const FORM_VALIDATION = Yup.object().shape({
    university: Yup.string().required("Required"),
    degree: Yup.string().required("Required"),
  });

  const { username, login, logout, firstName, lastName, token } = useAuth();
  const navigate = useNavigate();
  let response;

  const handleSubmit = async (data) => {
    console.log(data, selected);
    try {
      let skills = [];
      selected.map((value) => {
        skills.push(value.value);
      });
      console.log(skills);
      response = await axios.post(
        `${serverUrl}/profiles`,
        {
          university: data.university,
          degree: data.degree,
          skills,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      navigate("/");
    } catch (error) {
      setErrorState(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container sx={{ display: "grid" }} maxWidth={"lg"}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="relative"
        sx={{ px: "0rem", backgroundColor: "#fff", mb: "3rem", pt: "1rem" }}
      >
        <Toolbar>
          <Typography
            color={"primary"}
            variant="h4"
            fontFamily={"Barlow Condensed, sans-serif"}
            fontWeight={900}
            sx={{ flexGrow: 1 }}
          >
            OpenRecruit
            <CloudOutlinedIcon
              sx={{
                mx: "1rem",
                display: "inline-block",
              }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              endIcon={<LogoutIcon />}
              size="large"
              variant="text"
              onClick={logout}
            >
              Log out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            width: "50%",
            maxWidth: "60%",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Profile
          </Typography>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <Form>
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                id="university"
                label="University"
                name="university"
                autoFocus
                error={errorState}
                helperText={errorMessage}
              />
              <TextFieldWrapper
                margin="normal"
                required
                fullWidth
                name="degree"
                label="Degree"
                id="degree"
              />
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create profile!
              </Button>
            </Form>
          </Formik>
        </Box>
        <img src={imageCreate} alt="" style={{ maxWidth: "35rem" }} />
      </Box>
    </Container>
  );
};

export default CreateProfile;

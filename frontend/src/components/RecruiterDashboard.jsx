import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "@fontsource/barlow-condensed";
import { Link, useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/useAuth";
import ShareIcon from "@mui/icons-material/Share";
import missing from "../assets/missing.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import serverUrl from "../config/backend-url";

const MissingProfile = ({ firstName, lastName }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: "40rem" }} variant="outlined">
      <CardContent>
        <Typography
          sx={{ fontSize: "0.8rem" }}
          color="text.secondary"
          gutterBottom
        >
          Your Listings
        </Typography>
        <Typography variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Divider />

        <Typography sx={{ my: 1.5 }} color="text.secondary">
          No listings found
        </Typography>
        <img
          src={missing}
          alt="missing profile"
          style={{ maxWidth: "30rem" }}
        />
        <Typography variant="body2" fontWeight={400}>
          Looks like you haven't created any listings yet. Please create
          listings to get started with your network.
        </Typography>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            endIcon={<AccountBoxIcon />}
            fullWidth
            onClick={() => {
              navigate("/recruiter/create-listing");
            }}
          >
            Create Listing
          </Button>
        </CardActions>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

const CandidateDahsboard = () => {
  const navigate = useNavigate();
  const { username, logout, firstName, lastName, token } = useAuth();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/listings/my`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container sx={{ display: "grid" }} maxWidth={"lg"}>
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
              endIcon={<AccountBoxIcon />}
              onClick={() => {
                navigate("/candidate/create-profile");
              }}
            >
              My Listings
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
      <Box sx={{ display: "grid", px: "1.25rem", width: "40rem", gap: "2rem" }}>
        <Typography variant="h2">WELCOME {username.toUpperCase()}</Typography>
        <Box sx={{ display: "flex", p: "2rem", gap: "3rem" }}>
          {data.length > 0 ? (
            <Box
              sx={{
                border: 1,
                borderColor: "blue",
                borderRadius: 1,
                minWidth: "50%",
              }}
            >
              <List sx={{ minWidth: "40rem" }}>
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      divider={index !== data.length - 1}
                      component={Link}
                      to={item._id}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          component: "h3",
                          variant: "h6",
                          fontWeight: 600,
                        }}
                        primary={item.title}
                        secondary={
                          <>
                            <hr></hr>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                              fontWeight={500}
                            >
                              Location: {item.location}
                            </Typography>
                            <br />
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                              fontWeight={500}
                            >
                              Description: {item.description}
                            </Typography>
                            <br />
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                              fontWeight={500}
                            >
                              Skills:
                            </Typography>
                            <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
                              {item.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                    fontWeight={400}
                                  >
                                    {skill}
                                  </Typography>
                                </li>
                              ))}
                            </ul>
                          </>
                        }
                      />
                    </ListItem>
                    {index !== data.length - 1 && <hr style={{ margin: 0 }} />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          ) : (
            <MissingProfile firstName={firstName} lastName={lastName} />
          )}
        </Box>
        <Typography variant="body1" maxWidth={"50rem"}>
          Our algorithm autmatically finds the best matches for all of your job
          listings. Hiring has never been so easy.
        </Typography>
      </Box>
    </Container>
  );
};

export default CandidateDahsboard;

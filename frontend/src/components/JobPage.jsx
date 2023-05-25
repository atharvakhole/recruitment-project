import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { Card, CardContent, Container } from "@mui/material";
import "@fontsource/barlow-condensed";
import heroImage from "../assets/image-hero.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import serverUrl from "../config/backend-url";
import { useAuth } from "../hooks/useAuth";

const JobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { username, logout, firstName, lastName, token } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/listings/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [token, id]);

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
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button size="large" variant="text">
              About Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        border={"1px solid black"}
        sx={{
          display: "grid",
          borderRadius: "1rem",
          p: "2.25rem",
          width: "40rem",
          gap: "2rem",
        }}
      >
        <Typography variant="h4">
          Suitable candidates for this job opening:
        </Typography>
        {console.log(data)}
        {data?.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.applicant._id}
              sx={{ maxWidth: "40rem", marginBottom: "2rem" }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Name: {item.applicant.firstName} {item.applicant.lastName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Email: {item.applicant.email}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  University: {item.profile[0].university}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Degree: {item.profile[0].degree}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Skills: {item.profile[0].skills.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <Typography variant="h6">
              Looks like thereare no suitable candidates yet
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
};

export default JobPage;

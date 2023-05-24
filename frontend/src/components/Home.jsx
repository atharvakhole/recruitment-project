import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { Container } from "@mui/material";
import "@fontsource/barlow-condensed";
import heroImage from "../assets/image-hero.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
                navigate("/login");
              }}
            >
              Get Started
            </Button>
            <Button size="large" variant="text">
              About Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "grid", px: "1.25rem", width: "40rem", gap: "2rem" }}>
        <Typography variant="h2">
          RECRUITING MADE SIMPLE: ATTRACT AND RETAIN TALENT
        </Typography>
        <img
          src={heroImage}
          alt="recruitment hero"
          style={{ width: "35rem" }}
        />
        <Typography variant="body1">
          We connect talented individuals with top-notch companies, bridging the
          gap between dreams and opportunities. Our advanced algorithms and
          personalized matching ensure that the perfect fit is just a click
          away.
        </Typography>
        <Button
          onClick={() => navigate("/login")}
          size="large"
          variant="contained"
          sx={{ width: "30%" }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

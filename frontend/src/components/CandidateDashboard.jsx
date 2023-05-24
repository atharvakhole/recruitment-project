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
} from "@mui/material";
import "@fontsource/barlow-condensed";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/useAuth";
import ShareIcon from "@mui/icons-material/Share";
import missing from "../assets/missing.png";

const tempData = {
  university: "University of Wollongong, Australia",
  degree: "Bachelor of Computer Science (BCS)",
  skills: ["React", "Javascript", "TypeScript", "Node.js"],
};

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
          Your Profile
        </Typography>
        <Typography variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Divider />

        <Typography sx={{ my: 1.5 }} color="text.secondary">
          Missing Profile
        </Typography>
        <img
          src={missing}
          alt="missing profile"
          style={{ maxWidth: "30rem" }}
        />
        <Typography variant="body2" fontWeight={400}>
          Looks like you haven't created a profile yet. Please create a profile
          to get started with your network.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          endIcon={<AccountBoxIcon />}
          fullWidth
          onClick={() => {
            navigate("/candidate/create-profile");
          }}
        >
          Create Profile
        </Button>
      </CardActions>
    </Card>
  );
};

const CandidateDahsboard = () => {
  const navigate = useNavigate();
  const { username, logout, firstName, lastName } = useAuth();

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
              My profile
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
          {false ? (
            <Card sx={{ minWidth: "40rem" }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: "0.8rem" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Your Profile
                </Typography>
                <Typography variant="h5" component="div">
                  {firstName} {lastName}
                </Typography>
                <Divider />

                <Typography sx={{ my: 1.5 }} color="text.secondary">
                  Education
                </Typography>
                <Typography variant="body2">{tempData.university}</Typography>
                <Typography variant="body1" fontWeight={700}>
                  {tempData.degree}
                </Typography>

                <Typography sx={{ my: 1.5 }} color="text.secondary">
                  Skills
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 2,
                  }}
                >
                  {tempData.skills.map((value, index) => {
                    return (
                      <ListItem
                        key={index}
                        sx={{
                          display: "list-item",
                          py: 0,
                        }}
                      >
                        {value}
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
              <CardActions>
                <Button endIcon={<ShareIcon />} size="small">
                  Share
                </Button>
              </CardActions>
            </Card>
          ) : (
            <MissingProfile firstName={firstName} lastName={lastName} />
          )}

          <Card sx={{ minWidth: "20rem" }} variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: "0.8rem" }}
                color="text.secondary"
                gutterBottom
              >
                Your Activity
              </Typography>
              <Typography variant="h5" component="div">
                {firstName} {lastName}
              </Typography>
              <Divider />

              <Typography sx={{ my: 1.5 }} color="text.secondary">
                Education
              </Typography>
              <Typography variant="body2">{tempData.university}</Typography>
              <Typography variant="body1" fontWeight={700}>
                {tempData.degree}
              </Typography>

              <Typography sx={{ my: 1.5 }} color="text.secondary">
                Skills
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 2,
                }}
              >
                {tempData.skills.map((value, index) => {
                  return (
                    <ListItem
                      key={index}
                      sx={{
                        display: "list-item",
                        py: 0,
                      }}
                    >
                      {value}
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Box>
        <Typography variant="body1" maxWidth={"50rem"}>
          Our algorithm automatically shares your profile with relevant
          recruiters and hiring managers. Make sure to keep it updated and look
          out for messages from interested parties.
        </Typography>
      </Box>
    </Container>
  );
};

export default CandidateDahsboard;

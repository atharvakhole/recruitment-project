import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { AuthProvider } from "./hooks/useAuth";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
import { ProtectedRoutes } from "./components/ProtectedRoute";
import CreateProfile from "./components/CreateProfile";
import CreateListing from "./components/CreateListing";
import CandidateDashboard from "./components/CandidateDashboard";
import RecruiterDashboard from "./components/RecruiterDashboard";
import theme from "./assets/theme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route
            path="/candidate"
            element={<ProtectedRoutes roleRequired="candidate" />}
          >
            <Route path="" element={<CandidateDashboard />} />
            <Route path="create-profile" element={<CreateProfile />} />
          </Route>

          <Route
            path="/recruiter"
            element={<ProtectedRoutes roleRequired="recruiter" />}
          >
            <Route path="" element={<RecruiterDashboard />} />
            <Route path="create-listing" element={<CreateListing />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

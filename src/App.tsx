import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import React from "react";
import "./app.scss";

// components
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";

// context
import { useDarkModeContext } from "./context/DarkModeContext";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useDarkModeContext();
  const { currentUser } = useAuthContext();

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "clamp(240px, 15%, 400px) 2fr clamp(270px, 25%, 500px)",
          }}
        >
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({
    children,
  }: React.PropsWithChildren): React.ReactElement => {
    if (currentUser === null) {
      return <Navigate to={"/login"} />;
    }

    return children as React.ReactElement;
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

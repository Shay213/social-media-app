import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import React from "react";
import "./app.scss";

// components
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";
import { useDarkModeContext } from "./context/darkModeContext";

function App() {
  const currentUser = true;

  const { darkMode } = useDarkModeContext();

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 7 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({
    children,
  }: React.PropsWithChildren): React.ReactElement => {
    if (!currentUser) {
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

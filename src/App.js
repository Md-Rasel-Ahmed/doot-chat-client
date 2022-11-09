import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import LockProfile from "./pages/LoackProfile";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Singup from "./pages/Singup";
import ChangePassword from "./pages/ChangePassword";
import Logout from "./pages/Logout";
import Conversations from "./pages/Conversations";
import Calls from "./pages/Calls";
import PrivateRoute from "./Components/PrivateRoute";
import Inbox from "./pages/messages/Inbox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route
            path="convarsations"
            element={
              <PrivateRoute>
                <Conversations />
              </PrivateRoute>
            }
          />
          <Route
            path="calls"
            element={
              <PrivateRoute>
                <Calls />
              </PrivateRoute>
            }
          />
          <Route path="/convarsations/:id" element={<Inbox />} />
        </Route>
        <Route path="/singup" element={<Singup />} />

        <Route path="/reset" element={<Reset />} />
        <Route path="/lockprofile" element={<LockProfile />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

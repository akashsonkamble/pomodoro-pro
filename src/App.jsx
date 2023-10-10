import React, { useState, useEffect } from "react";
import { Header } from "./components/index";

import authService from "./appwrite/auth";

import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

import { Outlet } from "react-router";

import { ToastContainer } from "react-toastify";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ user }));
        } else {
          dispatch(logout());
        }
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-#d2e2f2">
      <div className="w-full block">
        <Header />
        <ToastContainer position="top-center" />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App;
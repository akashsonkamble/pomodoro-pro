import React, { useState, useEffect } from "react";
import { Container, Header } from "./components/index";

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
    return (
      <div className="w-full py-8 mt-4 text-center">
        <div className="w-full block">
          <p className="text-5xl font-bold mt-8 text-white drop-shadow-[0_1.2px_1.2px_rgba(102,51,153,1)]">Loading...</p>
        </div>
      </div>
    )
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
import React from "react";
import Navbar from "./components/Navbar";
import "./index.css"
import Home from "./pages/Home";
import FixTimelines from "./components/FixTimelines";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Home />

      <FixTimelines />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </main>
  );
}
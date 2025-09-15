import React from "react";
import Navbar from "./components/Navbar";
import "./index.css"
import Home from "./pages/Home";
import FixTimelines from "./components/FixTimelines";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Home />

      <FixTimelines />
    </main>
  );
}
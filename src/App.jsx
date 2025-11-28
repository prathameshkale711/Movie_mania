import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Navbar from "../Components/Navbar";
import Movies from "./pages/Movies";
//import HeroSection from "./Components/Herosection";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />

        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

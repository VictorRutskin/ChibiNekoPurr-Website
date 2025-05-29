import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import MyCats from "./Pages/MyCats";
import GameWiki from "./Pages/GameWiki";
import Links from "./Pages/Links";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<MyCats />} />
        <Route path="/wiki" element={<GameWiki />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

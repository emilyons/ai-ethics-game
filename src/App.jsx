import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ChapterOne from "./pages/ChapterOne/ChapterOne";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="chapter1" element={<ChapterOne />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

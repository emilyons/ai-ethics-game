import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ChapterOne from "./pages/ChapterOne/ChapterOne";
import ChapterTwo from "./pages/ChapterTwo/ChapterTwo";

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
        <Route path="chapter2" element={<ChapterTwo />} />
        <Route path="chapter2/password-basics" element={<PasswordBasics />} />
        <Route path="chapter2/build-password" element={<BuildPassword />} />
        <Route path="chapter2/data-dilemma" element={<DataDilemma />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

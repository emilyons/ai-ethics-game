import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ChapterOne from "./pages/ChapterOne/ChapterOne";
import ChapterTwo from "./pages/ChapterTwo/ChapterTwo";
import DataDilemma from "./pages/ChapterTwo/DataDilemma/DataDilemma";
import PasswordBasics from "./pages/ChapterTwo/PasswordBasics/PasswordBasics";
import BuildPassword from "./pages/ChapterTwo/BuildPassword/BuildPassword";
import PasswordRules from "./pages/ChapterTwo/PasswordRules/PasswordRules";
import PasswordHackingSim from "./pages/ChapterTwo/PasswordHackingSim/PasswordHackingSim";
import DefenderGame from "./pages/ChapterTwo/DefenderGame/DefenderGame";
import Encryption from "./pages/ChapterTwo/Encryption/Encryption";
import PhishingGame from "./pages/ChapterTwo/PhishingGame/PhishingGame";
import FinalQuiz from "./pages/ChapterTwo/FinalQuiz/FinalQuiz";

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
        <Route path="/chapter2/data-dilemma" element={<DataDilemma />} />
        <Route path="/chapter2/password-basics" element={<PasswordBasics />} />
        <Route path="/chapter2/build-password" element={<BuildPassword />} />
        <Route path="/chapter2/password-rules" element={<PasswordRules />} />
        <Route path="/chapter2/password-hacking" element={<PasswordHackingSim />} />
        <Route path="/chapter2/defender-game" element={<DefenderGame />} />
        <Route path="/chapter2/encryption" element={<Encryption />} />
        <Route path="/chapter2/phishing-game" element={<PhishingGame />} />
        <Route path="/chapter2/final-quiz" element={<FinalQuiz />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

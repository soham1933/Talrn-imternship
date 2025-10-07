import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CallToActionSection from "./components/CallToActionSection";
import IndustrySection from "./components/IndustrySection";
import TalrnNetworkSection from "./components/TalrnNetworkSection";
import ClientsSection from "./components/ClientsSection";
import ManagedServicesSection from "./components/ManagedServicesSection";
import NewsSection from "./components/NewsSection";
import FinalCallToAction from "./components/FinalCallToAction";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import JoinFlow from "./components/JoinFlow";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<><HeroSection />
          <CallToActionSection />
          <IndustrySection />
          <TalrnNetworkSection />
          <ClientsSection />
          <ManagedServicesSection />
          <NewsSection />
          <FinalCallToAction /></>} />
          <Route path="/join" element={<>
          <JoinFlow /></>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

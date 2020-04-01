import React from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import HomeSplashPage from "./pages/Home-Splash";
import CalculatorPage from "./pages/CalculatorPage";
import "./styles/index.css"
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <HomeSplashPage path="/" />
        <CalculatorPage path="/calculator" />
      </Router>
    </>
  );
};

export default App;

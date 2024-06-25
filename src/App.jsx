import React from "react";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Newsletter from "./components/Newsletter";
import Fun from "./components/Fun";

const App = () => {
  return <div>
    <Hero />
    <Landing />
    <AboutUs />
    <Fun />
    <Newsletter />
    <Footer />
  </div>;
};

export default App;

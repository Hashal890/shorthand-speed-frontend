import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.routes";
import Signin from "./Signin.routes";
import Signup from "./Signup.routes";
import Stenocourse from "./Stenocourse.routes";
import Contact from "./Contact.routes";
import About from "./About.routes";
import Dictations from "./Dictations.routes";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/dictations" element={<Dictations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/stenocourse" element={<Stenocourse />} />
    </Routes>
  );
};

export default Allroutes;

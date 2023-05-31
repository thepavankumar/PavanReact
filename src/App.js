import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  VStack,
  Box
} from "@chakra-ui/react";



import Home from "./Components/Home.js";
import Contact from "./Components/ContactMe.js";
import Portfolio from "./Components/Portfolio.js";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <VStack>
          <Box w="100%">
             <Navigation/>
          </Box>
          <Routes>
            <Route exact path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/about-me" element={<AboutMe />}>
              About Me
            </Route>
            <Route path="/portfolio" element={<Portfolio />}>
              Portfolio
            </Route>
            <Route path="/contact-me" element={<Contact />}>
              Contact
            </Route>
          </Routes>
        </VStack>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

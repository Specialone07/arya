import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Body from "./components/body/body";
import HomePage from "./components/HomePage";
import Services from "./components/serv/Services";
import ContactUs from "./components/contactus/ContactUs";
import AboutUs from "./components/about/about";
import Web from "./components/ServiceDetails/Web";
import Ecom from "./components/ServiceDetails/Ecom";
import Apps from "./components/ServiceDetails/App";
import Dm from "./components/ServiceDetails/Dm";
import Business from "./components/ServiceDetails/Business";
import Graphic from "./components/ServiceDetails/Graphic";
import Cloud from "./components/ServiceDetails/Cloud";
import Dsr from "./components/ServiceDetails/Dsr";
import Client from "./components/Testimonial/client";
// import Cont from "./components/Cont/Cont";
// import Cont from "./components/Cont/Cont";
class App extends React.Component {
  componentDidCatch(error, info) {
    console.error("Error caught by App component:", error, info);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<Body />} />
            <Route path="/services" element={<Services />} />
            <Route path="/feature" element={<feature />} />
            <Route path="/web" element={<Web />} />
            <Route path="/ecom" element={<Ecom />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/dm" element={<Dm />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/business" element={<Business />} />
            <Route path="/dsr" element={<Dsr />} />
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/client" element={<Client />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path ="/cont" element={<Cont/>} /> */}
            {/* <Route path="/menu" element={<Menu />} /> */}
            {/* Add more routes as needed */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}
export default App;

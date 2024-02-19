import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Body from "./components/body/body";
import HomePage from "./components/HomePage";
import Services from "./components/serv/Services";
import ContactUs from "./components/contactus/ContactUs";
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
            <Route path="/contact" element={<ContactUs />} />
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

import React from "react";
import Body from "./body/body";
import Services from "./serv/Services";
import Footer from "./Footer/footer.jsx";
import ContactUs from "./contactus/ContactUs.jsx";
import AboutUs from "./about/about.jsx";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Body />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default HomePage;

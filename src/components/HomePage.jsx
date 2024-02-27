import React from "react";
import Body from "./body/body";
import Services from "./serv/Services";
import Feat from "./feat/feature.jsx";
import Footer from "./Footer/footer.jsx";
import ContactUs from "./contactus/ContactUs.jsx";
import AboutUs from "./about/about.jsx";
import ChatBox from "./chat/whatsapp.jsx";
import Client from "./Testimonial/client";
import Subscription from "./subscription/subscription.jsx";
import Scroll from './scroll/scroll.jsx';
// import Cont from "./Cont/Cont.jsx";
const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Body />
      <Services />
      <Feat />
      <AboutUs />

      <Client />
      <ContactUs />
      <Scroll />
      <ChatBox />
      <Subscription />
      <Footer />
    </div>
  );
};
export default HomePage;

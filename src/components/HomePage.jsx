import React from "react";
import Body from "./body/body";
import Services from "./serv/Services";
import  Footer from './Footer/footer.jsx';
import ContactUs from  './contactus/ContactUs.jsx'

const HomePage=()=>{
    return(
        <div>
            {/* <Navbar /> */}
            <Body />
            <Services />
            <ContactUs />
            <Footer/>
        </div>
    )
};
export default HomePage;
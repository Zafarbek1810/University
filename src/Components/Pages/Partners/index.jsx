import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PartnersWrapper from "./style";
import Banner from "./Banner";
import Agents from "./Agents";
import Advantages from "./Advantages";
import Partner from "./Partner";
import PartnerForm from "./PartnerForm";
import PartnerBottom from "./PartnerBottom";

const Partners = () => {
  return (
    <PartnersWrapper>
      <Header />
      <div className="main">
        <Banner/>
        <Agents/>
        <Advantages/>
        <Partner/>
        <PartnerBottom/>
        <PartnerForm/>
      </div>
      <Footer />
    </PartnersWrapper>
  );
};

export default Partners;

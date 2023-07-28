import React from "react";
import BannerWrapper from "./style";
import Container from "../../../Common/Container";
const Banner = () => {
  return (
    <BannerWrapper>
      <Container>
        <h1 className="title">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <button className="myBtn">Ro’yxatdan o‘tish</button>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

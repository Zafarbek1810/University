import React from "react";
import { BeltWrapper } from "./style";
import Container from "../../../Common/Container";
import LogoSvg from "../../../Common/Svgs/LogoSvg";

const Belt = () => {
  return (
    <BeltWrapper>
      <Container>
        <div className="belt">
          <div className="logo">
            <LogoSvg />
          </div>
          <h4 className="title">
          BU YERDA TANIQLI RUS VA XORIJIY TADBIRKORLAR, DAVLAT ARBOBLARI <img src="/images/span-img.png" alt="" /> MA’RUZALAR O’QIYDI
          </h4>
        </div>
      </Container>
    </BeltWrapper>
  );
};

export default Belt;

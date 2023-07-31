import React from "react";
import { BeltWrapper } from "./style";
import Container from "../../../Common/Container";
import Logo2 from "../../../Common/Svgs/Logo2";

const Belt = () => {
  return (
    <BeltWrapper>
      <Container>
        <div className="belt">
          <div className="logo">
            <Logo2 />
          </div>
          <h4 className="title">
          У НАС ЧИТАЮТ ЛЕКЦИИ ИЗВЕСТНЫЕ РОССИЙСКИЕ И ЗАРУБЕЖНЫЕ ПРЕДПРИНИМАТЕЛИ<img src="/images/span-img.png" alt="" /> И ГОСУДАРСТВЕННЫЕ ДЕЯТЕЛИ
          </h4>
        </div>
      </Container>
    </BeltWrapper>
  );
};

export default Belt;

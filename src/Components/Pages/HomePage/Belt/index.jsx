import React from "react";
import { BeltWrapper } from "./style";
import Container from "../../../Common/Container";
import Logo2 from "../../../Common/Svgs/Logo2";
import { useTranslation } from "react-i18next";

const Belt = () => {
  const {t} = useTranslation();
  return (
    <BeltWrapper>
      <Container>
        <div className="belt">
          <div className="logo">
            <Logo2 />
          </div>
          <h4 className="title">
          {t("belt.text1")}<img src="/images/span-img.png" alt="" /> {t("belt.text2")}
          </h4>
        </div>
      </Container>
    </BeltWrapper>
  );
};

export default Belt;

import React from "react";
import AbiturientBannerWrapper from "./style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";

const AbiturientBanner = () => {
  const {t} = useTranslation();
  return (
    <AbiturientBannerWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <h2 className="title">
             {t("abiturient.banner.title")}
            </h2>
          </div>
          <div className="right">
            <p className="descr">
            {t("abiturient.banner.descr")}
            </p>
          </div>
        </div>
      </Container>
    </AbiturientBannerWrapper>
  );
};

export default AbiturientBanner;

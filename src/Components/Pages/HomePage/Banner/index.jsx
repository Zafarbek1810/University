import React from "react";
import BannerWrapper from "./style";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink"
import { useTranslation } from "react-i18next";
const Banner = () => {
  const {t} = useTranslation();
  const onclickBtn=()=>{
  }
  return (
    <BannerWrapper>
      <Container>
        <h1 className="title">
        {t("banner.title")}
        </h1>
        <p className="description">
        {t("banner.descr")}
        </p>
        {/* <button className="myBtn" onClick={onclickBtn}> {t("banner.button")}</button> */}
        <MyLink to="/academy" className="myBtn">{t("banner.button")}</MyLink>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

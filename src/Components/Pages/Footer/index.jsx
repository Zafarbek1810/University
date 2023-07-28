import React from "react";
import FooterWrapper from "./style";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import FacebookSvg from "../../Common/Svgs/FacebookSvg";
import InstagramSvg from "../../Common/Svgs/InstagramSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="wrapper">
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="links">
            <MyLink to="/">Abituriyentlar</MyLink>
            <MyLink to="/">O&apos;quv dasturlari</MyLink>
            <MyLink to="/">Biz haqimizda</MyLink>
            <MyLink to="/">Talabalar</MyLink>
            <MyLink to="/">Chet elliklar uchun ta&apos;lim</MyLink>
            <MyLink to="/">Hamkorlar</MyLink>
          </div>
          <div className="social">
            <MyLink to="/">
              <FacebookSvg />
            </MyLink>
            <MyLink to="/">
              <InstagramSvg />
            </MyLink>
            <MyLink to="/">
              <TelegramSvg />
            </MyLink>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

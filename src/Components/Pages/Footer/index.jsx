import React from "react";
import FooterWrapper from "./style";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import FacebookSvg from "../../Common/Svgs/FacebookSvg";
import InstagramSvg from "../../Common/Svgs/InstagramSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import LogoSvg from "../../Common/Svgs/LogoSvg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <FooterWrapper>
      <Container>
        <div className="wrapper">
          <div className="top">
            <div className="col">
              <div>{t("header.link1")}</div>
              <MyLink to="/">{t("header.link2")}</MyLink>
              {/* <MyLink to="/">Обучение для иностранцев</MyLink> */}
              {/* <MyLink to="/">Программы обучения</MyLink> */}
            </div>
            <div className="col">
              <div>{t("footer.about")}</div>
              <MyLink to="/partners">{t("header.link6")}</MyLink>
              <MyLink to="/contacts">{t("header.link8")}</MyLink>
              <MyLink to="/academy">{t("header.link7")}</MyLink>
            </div>
            <div className="col">
              <div>{t("footer.aloqa")}</div>
              <a href="tel:998914360010">+998 91-436-00-10</a>
              <a href="tel:998914350010">+998 91-435-00-10</a>
              <MyLink to="/">uftu.vakolatxonasi@gmail.com</MyLink>
            </div>
            {/* <div className="col2">
              <div>Mобильное приложение</div>
              <div className="links">
                <MyLink to="/">
                  <img src="/images/googlePlay.png" alt="" />
                </MyLink>
                <MyLink to="/">
                  <img src="/images/appStore.png" alt="" />
                </MyLink>
              </div>
            </div> */}
          </div>
          <div className="bottom">
            <div className="logo">
              <img src="/images/logo.svg" />
            </div>

            <div className="center">
              <MyLink to="https://uftu.uz/">
                uftu.uz - All rights reserved.
              </MyLink>
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
          {/* <div className="logo">
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
          </div> */}
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

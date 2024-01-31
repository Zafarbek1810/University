import React from "react";
import useWindowWidth from "../../../../Hooks/useWindow";
import { PartnersWrapper } from "./style";
import { useTranslation } from "react-i18next";

const data = [
  {
    imgPath: "/images/logo.svg",
  },
  {
    imgPath: "/images/logo.svg",
  },
  {
    imgPath: "/images/logo.svg",
  },
  {
    imgPath: "/images/logo.svg",
  },
  {
    imgPath: "/images/logo.svg",
  },
  {
    imgPath: "/images/logo.svg",
  },
];

const data2x = [...data, ...data];

const Partners = () => {
  const width = useWindowWidth();
  const {t} = useTranslation();
  return (
    <PartnersWrapper animateWidth={width}>
        <h4 className="title">{t("partners.title")}</h4>
      <div className="wrapper">
        <div className="slider">
          <div className="slide-track">
            {data2x.map((item, idx) => (
              <div className="slide" key={idx}>
                <div>
                  <img src={item.imgPath} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PartnersWrapper>
  );
};

export default Partners;

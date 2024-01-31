import React from "react";
import BannerWrapper from "./style";
import Container from "../../../../Components/Common/Container";
import PartnerIcon1 from "../../../Common/Svgs/PartnerIcon1";
import PartnerIcon2 from "../../../Common/Svgs/PartnerIcon2";
import PartnerIcon3 from "../../../Common/Svgs/PartnerIcon3";
import PartnerIcon4 from "../../../Common/Svgs/PartnerIcon4";
import PartnerIcon6 from "../../../Common/Svgs/PartnerIcon6";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      icon: <PartnerIcon1 />,
      descr: t("partnerPage.banner.li1"),
    },
    {
      icon: <PartnerIcon2 />,
      descr:
      t("partnerPage.banner.li2")
    },
    {
      icon: <PartnerIcon3 />,
      descr:
      t("partnerPage.banner.li3")
    },
    {
      icon: <PartnerIcon4 />,
      descr:
      t("partnerPage.banner.li4")
    },
    {
      icon: <PartnerIcon2 />,
      descr:
      t("partnerPage.banner.li5")
    },
    {
      icon: <PartnerIcon6 />,
      descr:
      t("partnerPage.banner.li6")
    },
  ];
  return (
    <BannerWrapper>
      <Container>
        <h3 className="title">{t("partnerPage.banner.title")}</h3>
        <div className="bottom">
          <div className="cards">
            {cardData.map((item) => (
              <div key={item.title} className="item">
                <div className="icon">{item.icon}</div>
                <div className="text">
                  <p className="descr">{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

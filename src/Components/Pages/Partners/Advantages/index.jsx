import React from "react";
import AdvantagesWrapper from "./style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";



const Advantages = () => {
  const {t} = useTranslation();

  const cardData = [
    {
      id: 1,
      text: t("partnerPage.agent.li1"),
    },
    {
      id: 2,
      text: t("partnerPage.agent.li2")
    },
    {
      id: 3,
      text: t("partnerPage.agent.li3")
    },
    {
      id: 4,
      text: t("partnerPage.agent.li4")
    },
    {
      id: 5,
      text: t("partnerPage.agent.li5")
    },
    {
      id: 6,
      text: t("partnerPage.agent.li6")
    },
    {
      id: 7,
      text: t("partnerPage.agent.li7")
    },
    {
      id: 8,
      text: t("partnerPage.agent.li8")
    },
    // {
    //   id: 9,
    //   text: t("partnerPage.agent.liTitle")
    // },
  ];

  return (
    <AdvantagesWrapper>
      <Container>
        <h3 className="title">{t("partnerPage.agent.liTitle")}</h3>
        <div className="cards">
          {cardData.map((item) => (
            <div key={item.id} className="item">
              <div className="icon"><span>{item.id}</span></div>
              <div className="text">
                <p className="descr">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AdvantagesWrapper>
  );
};

export default Advantages;

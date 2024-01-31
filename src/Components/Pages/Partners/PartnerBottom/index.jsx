import React from "react";
import { PartnerWrapper } from "../Partner/style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";

const PartnerBottom = () => {
  const { t } = useTranslation();
  return (
    <PartnerWrapper>
      <Container>
        <div className="bottom">
          <p className="title">{t("partnerPage.vuzi.title")}</p>
          <div className="cards">
            {[...Array(6)].map((item, index) => (
              <div className="card" key={index}>
                <div className="img-top">
                  <img src="/images/partners1.png" alt="" />
                </div>
                <div className="text">
                  Московский государственный университет им. М.В. Ломоносова
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PartnerWrapper>
  );
};

export default PartnerBottom;

import React from "react";
import HistoryWrapper from "./style";
import Container from "../../../Common/Container";
import AcademySvg from "../../../Common/Svgs/AcademySvg";
import { useTranslation } from "react-i18next";

const History = () => {
  const {t} = useTranslation();
  return (
    <HistoryWrapper>
      <Container>
        <div className="wrapper">
          <div className="top">
            <div className="left">
              <img className="img1" src="/images/history.png" alt="" />
            </div>
            <div className="right">
              <h5 className="title">{t("about.historyTitle")}</h5>
              <p className="subtitle">
              {t("about.historySubtitle")}
              </p>
              <p className="descr">
              {t("about.historyText")}
              </p>
            </div>
          </div>

          <div className="bottom">
            <div className="texts">
              <h6>
              {t("about.liTitle")}
              </h6>
              <p>
              {t("about.liSubtitle")}
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                {t("about.li1")}
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                {t("about.li2")}
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                {t("about.li3")}
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                {t("about.li4")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HistoryWrapper>
  );
};

export default History;

import React from "react";
import HowToProcedWrapper from "./style";
import Container from "../../../Common/Container";
import ProcedIcon1 from "../../../Common/Svgs/ProcedIcon1";
import ProcedIcon2 from "../../../Common/Svgs/ProcedIcon2";
import ProcedIcon3 from "../../../Common/Svgs/ProcedIcon3";
import { useTranslation } from "react-i18next";

const HowToProced = () => {
  const {t} = useTranslation();
  return (
    <HowToProcedWrapper>
      <Container>
        <h3 className="title">{t("abiturient.proced.h3title")}</h3>
        <div className="wrapper">
          <div className="box">
            <span className="spanTitle">{t("abiturient.proced.spanTitle")} 1</span>
            <p className="title">{t("abiturient.proced.title1")}</p>
            <ul>
              <li>{t("abiturient.proced.li1")}</li>
              <li>{t("abiturient.proced.li2")}</li>
              <li>
              {t("abiturient.proced.li3")}
              </li>
              <li>
              {t("abiturient.proced.li4")}
              </li>
            </ul>
            <p className="title">
            {t("abiturient.proced.title2")}
            </p>
            <ul>
              <li>
              {t("abiturient.proced.li5")}
              </li>
              <li>с{t("abiturient.proced.li6")}</li>
              <li>{t("abiturient.proced.li7")}</li>
              <li>
              {t("abiturient.proced.li8")}
              </li>
            </ul>
            <p className="title">
            {t("abiturient.proced.title3")}
            </p>
            <ul>
              <li>{t("abiturient.proced.li9")}</li>
              <li>{t("abiturient.proced.li10")}</li>
              <li>
              {t("abiturient.proced.li11")}
              </li>
            </ul>
            <div className="bottom">
              <div className="bottomLi">
                <div className="icon">
                  <ProcedIcon1 />
                </div>
                <p>
                {t("abiturient.proced.li12")}
                </p>
              </div>
              <div className="bottomLi">
                <div className="icon">
                  <ProcedIcon2 />
                </div>
                <p>
                {t("abiturient.proced.li13")}
                </p>
              </div>
              <div className="bottomLi">
                <div className="icon">
                  <ProcedIcon3 />
                </div>
                <p>
                {t("abiturient.proced.li14")}
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <span className="spanTitle">{t("abiturient.proced.spanTitle")} 2</span>
            <p className="title">
            {t("abiturient.proced.title4")}
            </p>
            <ul>
              <li>{t("abiturient.proced.li15")}</li>
              <li>{t("abiturient.proced.li16")}</li>
              <li>о{t("abiturient.proced.li17")}</li>
            </ul>
          </div>
          <div className="box">
            <span className="spanTitle">{t("abiturient.proced.spanTitle")} 3</span>
            <p className="title">
            {t("abiturient.proced.title5")}
            </p>
          </div>
          <div className="box">
            <span className="spanTitle">{t("abiturient.proced.spanTitle")} 4</span>
            <p className="title">
            {t("abiturient.proced.title6")}
            </p>
            <ul>
              <li>
              {t("abiturient.proced.li18")}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </HowToProcedWrapper>
  );
};

export default HowToProced;

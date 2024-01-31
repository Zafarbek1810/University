import React from "react";
import FounderWrapper from "./style";
import Container from "../../../Common/Container";
import Tab6Icon from "../../../Common/Svgs/Tab6Icon";
import { useTranslation } from "react-i18next";

const Founder = () => {
  const {t} = useTranslation();

  return (
    <FounderWrapper>
      <Container>
        <h3 className="title">{t("about.founderTitle")}</h3>
        <p className="founder_info_1">
        {t("about.founderSubtitle")}
        </p>

        <div className="bottom">
          <div className="left">
            <img src="/images/founder.png" alt="ss" />
          </div>
          <div className="right">
            <div className="svgs">
              <Tab6Icon />
              <Tab6Icon />
            </div>
            <p className="founder_info_2">
            {t("about.founderText")}
            </p>
          </div>
        </div>
      </Container>
    </FounderWrapper>
  );
};

export default Founder;

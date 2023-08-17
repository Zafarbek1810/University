import React from "react";
import BannerAcademyWrapper from "./style";
import Container from "../../../Common/Container";
import Tab6Icon from "../../../Common/Svgs/Tab6Icon";

const BannerAcademy = () => {
  return (
    <BannerAcademyWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <h3 className="title">ОБ АКАДЕМИИ</h3>
            <div className="bottom">
            <div className="svgs">
              <Tab6Icon />
              <Tab6Icon />
            </div>
            <p className="descr">
              Подготавливаем высококвалифицированные кадры к эффективной работе
              в современных экономических и социальных условиях
            </p>
            </div>
          </div>
          <div className="right">
            <img src="/images/academy.png" alt="" />
          </div>
        </div>
      </Container>
    </BannerAcademyWrapper>
  );
};

export default BannerAcademy;

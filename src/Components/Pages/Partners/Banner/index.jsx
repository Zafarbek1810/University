import React from "react";
import BannerWrapper from "./style";
import Container from "../../../../Components/Common/Container";
import PartnerIcon1 from "../../../Common/Svgs/PartnerIcon1";
import PartnerIcon2 from "../../../Common/Svgs/PartnerIcon2";
import PartnerIcon3 from "../../../Common/Svgs/PartnerIcon3";
import PartnerIcon4 from "../../../Common/Svgs/PartnerIcon4";
import PartnerIcon6 from "../../../Common/Svgs/PartnerIcon6";

const cardData = [
  {
    icon: <PartnerIcon1 />,
    descr:
      "Помощь в подборе квалифицированных специалистов, соответствующих вашим требованиям"
  },
  {
    icon: <PartnerIcon2 />,
    descr:
      "Помощь в подборе студентов для периодических, сезонных работ и работ с гибким графиком"
  },
  {
    icon: <PartnerIcon3 />,
    descr:
      "Направление студентов на практику, стажировку и возможность отобрать наиболее подготовленных для постоянной работы"
  },
  {
    icon: <PartnerIcon4 />,
    descr:
      "Организация встреч со студентами и проведение презентации вашей компании в двух учебных корпусах Академии"
  },
  {
    icon: <PartnerIcon2/>,
    descr:
      "Размещение информации о вашей компании и имеющихся вакансиях на стендах, сайте и социальных сетях Академии"
  },
  {
    icon: <PartnerIcon6 />,
    descr:
      "Размещение информации о вашей компании и имеющихся вакансиях на стендах, сайте и социальных сетях Академии"
  },
];

const Banner = () => {
  return (
    <BannerWrapper>
      <Container>
        <h3 className="title">ПАРТНЕРАМ СОТРУДНИЧЕСТВО С РАБОТОДАТЕЛЯМИ</h3>
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

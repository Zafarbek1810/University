import React from "react";
import HistoryWrapper from "./style";
import Container from "../../../Common/Container";
import PartnerIcon2 from "../../../Common/Svgs/PartnerIcon2";
import AcademySvg from "../../../Common/Svgs/AcademySvg";

const History = () => {
  return (
    <HistoryWrapper>
      <Container>
        <div className="wrapper">
          <div className="top">
            <div className="left">
              <img className="img1" src="/images/history.png" alt="" />
            </div>
            <div className="right">
              <h5 className="title">ИСТОРИЯ АКАДЕМИИ</h5>
              <p className="subtitle">
                Частное учреждение высшего образования «Московская академия
                предпринимательства» образована в 1997 году.​
              </p>
              <p className="descr">
                За 25 лет Академия стала одним из востребованных высших учебных
                заведений нового поколения, определила новые требования к
                профессиональной подготовке предпринимателей, государственных
                служащих и руководителей организаций. За годы своего развития
                Академия накопила значительный научный потенциал. Нам удалось
                создать систему управления качеством подготовки специалистов, в
                которую включены организационные структуры, методики, процессы и
                материальные ресурсы
              </p>
            </div>
          </div>

          <div className="bottom">
            <div className="texts">
              <h6>
                Система обучения, реализуемая в Академии, обеспечивает быстрое
                включение его выпускников в практическую деятельность
                государственных и коммерческих предприятий, учреждений и
                организаций
              </h6>
              <p>
                Выпускники академии получают фундаментальные знания и
                практические навыки по созданию своего бизнeса Студентам
                представляется возможность для получения многоступенчатого
                бизнес-образования, развития интеллектуального потенциала,
                овладения профессиональной этикой, навыками делового общения,
                управления персоналом. Они получают хорошую базу для открытия
                собственного дела.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                  Студентам предоставляется: медицинское обслуживание,
                  качественное питание, учебная литература и методические
                  материалы
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                  Студентам предоставляется: медицинское обслуживание,
                  качественное питание, учебная литература и методические
                  материалы
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                  Студентам предоставляется: медицинское обслуживание,
                  качественное питание, учебная литература и методические
                  материалы
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <AcademySvg />
                </div>
                <div className="text">
                  Студентам предоставляется: медицинское обслуживание,
                  качественное питание, учебная литература и методические
                  материалы
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

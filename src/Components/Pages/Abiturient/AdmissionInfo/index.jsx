import React, { useState } from "react";
import { AdmissionWrapper } from "./style";
import Container from "../../../Common/Container";
import Tab1 from "./Items/Tab1";
import Tab2 from "./Items/Tab2";
import Tab3 from "./Items/Tab3";
import Tab4 from "./Items/Tab4";
import Tab5 from "./Items/Tab5";

const AdmissionInfo = () => {
  const [activePage, setActivePage] = useState(1);

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <Tab1 />;
      break;
    }
    case 2: {
      Component = <Tab2 />;
      break;
    }
    case 3: {
      Component = <Tab3 />;
      break;
    }
    case 4: {
      Component = <Tab4 />;
      break;
    }
    case 5: {
      Component = <Tab5 />;
      break;
    }
  }

  const tabMassiv = [
    {
      title: "Бакалавриат",
      id: 1,
    },
    {
      title: "Второе высшее",
      id: 2,
    },
    {
      title: "Дистанционное обучение",
      id: 3,
    },
    {
      title: "Колледж",
      id: 4,
    },
    {
      title: "Магистратура",
      id: 5,
    },
  ];

  return (
    <AdmissionWrapper>
      <Container>
        <div className="tabs">
          <h4 className="title">
            ИНФОРМАЦИЯ О ПРИЁМЕ В 2023 / 2024 УЧЕБНОМ ГОДУ
          </h4>
          {tabMassiv.map((item, index) => {
            return (
              <button
                onClick={() => setActivePage(item.id)}
                key={index}
                className={`tab-item ${activePage === item.id ? "active" : ""}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="component">{Component}</div>
      </Container>
    </AdmissionWrapper>
  );
};

export default AdmissionInfo;

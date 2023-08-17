import React, { useState } from "react";
import { PartnerWrapper } from "./style";
import Container from "../../../Common/Container";
import TabPartners1 from "./TabPartners1";
import TabPartners2 from "./TabPartners2";
import TabPartners3 from "./TabPartners3";

const tabMassiv = [
  {
    title: "Государственные структуры",
    id: 1,
  },
  {
    title: "Коммерческие организации",
    id: 2,
  },
  {
    title: "Банки",
    id: 3,
  },
];

const Partner = () => {
  const [activePage, setActivePage] = useState(1);

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <TabPartners1 />;
      break;
    }
    case 2: {
      Component = <TabPartners2 />;
      break;
    }
    case 3: {
      Component = <TabPartners3 />;
      break;
    }
  }

  return (
    <PartnerWrapper>
      <Container>
        <h3 className="title">ДЕЙСТВУЮЩИЕ ПАРТНЕРЫ</h3>

        <div className="middle">
          <p className="title">Работодатели</p>
          <div className="tabs">
            {tabMassiv.map((item, index) => (
              <button
                onClick={() => setActivePage(item.id)}
                key={index}
                className={`tab-item ${activePage === item.id ? "active" : ""}`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="component">{Component}</div>
        </div>

      </Container>
    </PartnerWrapper>
  );
};

export default Partner;

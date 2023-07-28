import React, { useState } from "react";
import { ProgramWrapper } from "./style";
import Tab1 from "./Items/Tab1";
import Tab2 from "./Items/Tab2";
import Tab3 from "./Items/Tab3";
import Tab4 from "./Items/Tab4";
import Tab5 from "./Items/Tab5";
import Container from "../../../Common/Container";

const Program = () => {
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
      title: "Bakalavr",
      id: 1,
    },
    {
      title: "Ikkinchidan yuqori",
      id: 2,
    },
    {
      title: "Masofaviy ta'lim",
      id: 3,
    },
    {
      title: "Kollej",
      id: 4,
    },
    {
      title: "Magistr diplomi",
      id: 5,
    },
  ];
  return (
    <ProgramWrapper>
      <Container>
        <div className="tabs">
          <h4 className="title">Ta&apos;lim dasturlari</h4>
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
    </ProgramWrapper>
  );
};

export default Program;

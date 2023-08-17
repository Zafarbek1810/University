import React from "react";
import { Tab8Wrapper } from "./style";
import Tab6Icon from "../../../../Common/Svgs/Tab6Icon";
import InfoTab1 from "./InfoTab1";
import InfoTab2 from "./InfoTab2";
import InfoTab3 from "./InfoTab3";
import { useState } from "react";

const Tab8 = () => {
  const [activePage, setActivePage] = useState(1);

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <InfoTab1 />;
      break;
    }
    case 2: {
      Component = <InfoTab2 />;
      break;
    }
    case 3: {
      Component = <InfoTab3 />;
      break;
    }
  }

  const tabMassiv = [
    {
      title: "Что конкретно делаем?",
      id: 1,
    },
    {
      title: "Работодателям",
      id: 2,
    },
    {
      title: "Соискателю",
      id: 3,
    },
  ];

  return (
    <Tab8Wrapper>
      <h3 className="title">ТРУДОУСТРОЙСТВО</h3>
      <p className="descr">
        Центр трудоустройства — связующее звено между соискателями и
        работодателями.
      </p>

      <div className="bottom">
        <div className="box1">
          <div className="svgs">
            <Tab6Icon />
            <Tab6Icon />
          </div>
          <p>
            Наша миссия — трудоустройство молодых специалистов — студентов и
            выпускников ЧУ ВО МосАП, содействие их карьерному росту и
            профессиональному развитию. В сферу наших приоритетных задач входят
            информационно-консультативная поддержка соискателей и организация
            рекрутинговых мероприятий.
          </p>
        </div>
        <div className="box2">
          <h6>Задачи студенческого совета:</h6>
          <p>
            Привлечение студентов к решению всех вопросов, связанных с
            подготовкой высококвалифицированных специалистов; Защита и
            представление прав и интересов студентов; Содействие органам
            управления Университета в организации досуга и быта студентов, в
            пропаганде здорового образа жизни; Содействие структурным
            подразделениям в проводимых ими мероприятиях в рамках
            образовательного процесса; Информирование студентов о деятельности
            вуза; Участие в формировании общественного мнения о студенческой
            молодежи как реальной силе и стратегическом ресурсе развития
            российского общества;
          </p>
        </div>
      </div>


      <div className="info">
        <h3 className="title">ИНФОРМАЦИЯ</h3>
        <div className="tabs">
          {tabMassiv.map((item, index) => (
              <button
                onClick={() => setActivePage(item.id)}
                key={index}
                className={`tab-item ${activePage === item.id ? "active" : ""}`}
              >
                {item.title}
              </button>
            )
          )}
        </div>
        <div className="component">{Component}</div>
      </div>
    </Tab8Wrapper>
  );
};

export default Tab8;

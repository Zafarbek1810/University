import React from "react";
import AdvantagesWrapper from "./style";
import Container from "../../../Common/Container";

const cardData = [
  {
    id: 1,
    text: "Аккредитация ВО и СПО на 6 лет (ВО с февраля 2020, СПО – с июня 2020)",
  },
  {
    id: 2,
    text: "Зачисление студентов на дистанционное обучение два раза в месяц",
  },
  {
    id: 3,
    text: "Выдача справки о студентах-переводниках и всех необходимых документов до 3-х рабочих дней",
  },
  {
    id: 4,
    text: "Зачисление студентов-переводников без потери курса",
  },
  {
    id: 5,
    text: "Адаптивные направления подготовки",
  },
  {
    id: 6,
    text: "ЭПК для региональных партнеров",
  },
  {
    id: 7,
    text: "Закрепленный личный менеджер-куратор",
  },
  {
    id: 8,
    text: "Ежемесячные выплаты вознаграждения партнерам",
  },
  {
    id: 9,
    text: "Ежемесячные выплаты вознаграждения партнерам",
  },
];

const Advantages = () => {
  return (
    <AdvantagesWrapper>
      <Container>
        <h3 className="title">Наши преимущества</h3>
        <div className="cards">
          {cardData.map((item) => (
            <div key={item.id} className="item">
              <div className="icon"><span>{item.id}</span></div>
              <div className="text">
                <p className="descr">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AdvantagesWrapper>
  );
};

export default Advantages;

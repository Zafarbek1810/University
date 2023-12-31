import React from "react";
import InfoTab2Wrapper from "./style";

const InfoTab2 = () => {
  return (
    <InfoTab2Wrapper>
      <div className="box">
        <p className="title">Уважаемые работодатели!</p>
        <p className="title">Сотрудничество с МосАП - это:</p>
        <ul>
          <li>
            помощь в подборе квалифицированных специалистов, соответствующих
            вашим требованиям;
          </li>
          <li>
            помощь в подборе студентов для периодических, сезонных работ и работ
            с гибким графиком;
          </li>
          <li>
            направление студентов на практику, стажировку и возможность отобрать
            наиболее подготовленных для постоянной работы;
          </li>
          <li>
            организация встреч со студентами и проведение презентации вашей
            компании в двух учебных корпусах Академии;
          </li>
          <li>
            размещение информации о вашей компании и имеющихся вакансиях на
            стендах, сайте и социальных сетях Академии;
          </li>
          <li>
            участие в «Ярмарках вакансий», семинарах, мастер-классах и прочих
            мероприятиях;
          </li>
          <li>
            особые условия повышения уровня образования сотрудников вашей
            организации, по различным программам обучения Академии.
          </li>
        </ul>
        <p className="title">Мы готовы рассмотреть ваши предложения по интересующим направлениям и мероприятиям.</p>
      </div>
    </InfoTab2Wrapper>
  );
};

export default InfoTab2;

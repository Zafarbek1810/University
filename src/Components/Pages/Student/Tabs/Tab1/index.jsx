import React from "react";
import { AccordionWrapper, Tab1Wrapper } from "./style";
import { Collapse } from "antd";
const { Panel } = Collapse;

const data = [
  {
    id: 1,
    title: "Это нужно знать",
    text: "dd",
  },
  {
    id: 2,
    title: "collapse.question2",
    text: "collapse.answer2",
  },
];

const Tab1 = () => {
  return (
    <Tab1Wrapper>
      <h3 className="title">СТУДЕНТАМ</h3>
      <p className="descr">
        Вся необходимая информация об учебе и студенческой жизни в Академии
      </p>

      <div className="box">
        <p className="text1">
          Дорогой студент! Мы благодарим тебя за сделанный выбор и искренне
          желаем, чтобы студенческие годы стали для тебя незабываемым и самым
          удивительным периодом в жизни.
        </p>
        <p className="text2">
          Ты присоединился к нашему многочисленному братству.Мы все гордимся
          Академией, дорожим ее честью и ее репутациейи рассчитываем на то, что
          ты поддержишь наше стремление сделать Академию лучше. Помни, что ты не
          один, что рядом с тобой твои преподаватели, друзья, коллеги, которые
          всегда готовы помочь. Искренне желаем успехов и надеюсь, что слава
          Академии приумножится и твоими профессиональными успехами.
        </p>
      </div>

      <div className="accordions">
        <Collapse accordion bordered={false} defaultActiveKey={1}>
          <Panel header="Это нужно знать">
            <Accordion1 />
          </Panel>
          <Panel header="У нас так принято">
            <Accordion2 />
          </Panel>
        </Collapse>
      </div>
    </Tab1Wrapper>
  );
};

const Accordion1 = () => {
  return (
    <AccordionWrapper className="text1">
      <li className="title">Деканат</li>
      <p className="descr">
        Подразделение Академии, в которое студент может обратиться за справкой,
        узнать академическую задолженность, как найти того или иного
        преподавателя, уточнить расписание и номер своей группы и т.п.
        Сотрудники деканата всегда готовы ответить на любой Ваш вопрос и помочь
        Вам.
      </p>
      <li className="title">Аудитория</li>
      <p className="descr">
        Помещение, предназначенное для проведения занятий.
      </p>
      <li className="title">Преподаватель</li>
      <p className="descr">
        Сотрудник Академии, осуществляющий обучение студентов. В вузе не принято
        употребление термина «учитель» по отношению к преподавателю.
      </p>
      <li className="title">Куратор</li>
      <p className="descr">
        Это ответственный сотрудник из числа преподавателей, назначенный
        приказом ректора Академии для сопровождения студентов первого курса
        очной формы. По сути, данный преподаватель помогает декану и выполняет
        функции «классного руководителя». На старших курсах эти функции
        полностью передаются Декану факультета.
      </p>
      <li className="title">Староста</li>
      <p className="descr">
        Назначенный деканатом студент группы, являющийся представителем группы в
        деканате и обеспечивающий связь деканата со студентами группы.
      </p>
      <li className="title">Лекция</li>
      <p className="descr">
        Вид учебного занятия, на котором преподаватель излагает теоретический
        материал
      </p>
      <li className="title">Семинар</li>
      <p className="descr">
        Вид учебного занятия, на котором предусмотрена практическая работа
        студентов, включая ответы студентов на полученные для самостоятельного
        изучения вопросы.
      </p>
      <li className="title">Семестр</li>
      <p className="descr">
        Учебный год разделен на 2 семестра по 18 недель каждый.
      </p>
      <li className="title">Сессия</li>
      <p className="descr">
        Учебное мероприятие, в течение которого студенты сдают зачеты и экзамены
        за истекший семестр
      </p>
      <li className="title">Учебная дисциплина</li>
      <p className="descr">
        Учебный курс, по которому в соответствии с программой и учебным планом
        ведется подготовка студентов в рамках профиля учебного заведения и
        избранной ими специальности это совокупность знаний. Это то же самое,
        что и термин «предмет» в школе. Однако, в вузе не принято употреблять
        данный термин.
      </p>
    </AccordionWrapper>
  );
};
const Accordion2 = () => {
  return (
    <AccordionWrapper className="text1">
      <li className="title">Пропускная система</li>
      <p className="descr">
        В целях поддержания порядка в Академии действует пропускная система.
        Каждый входящий обязан предъявить документы. Вашим пропуском в Академию
        является электронный пропуск студента.
      </p>
      <li className="title">Одежда</li>
      <p className="descr">
        В Академии есть ряд обязательных требований к одежде. Войдя в здание
        мужчины снимают головные уборы. Верхнюю одежду принято сдавать в
        гардероб – недопустимо входить в верхней одежде в какие-либо помещения
        Академии. Студентам рекомендуется приходить на занятия аккуратно
        одетыми, причесанными, предпочтительным является деловой стиль. Дурным
        тоном в Академии считается вход в здание в шортах, открытых майках,
        мини-юбках, шлепанцах и т.п.
      </p>
      <li className="title">Здоровый образ жизни</li>
      <p className="descr">
        Употребление и распространение на территории Академии наркотических
        средств влечет за собой немедленное отчисление. Распивать спиртные
        напитки, включая пиво, находиться в состоянии алкогольного опьянения
        строго запрещено и также влечет за собой отчисление. Курение в корпусах
        и на территории Академии строго запрещено на основании Федерального
        закона от 23.02.2014 года № 15-ФЗ «Об охране здоровья граждан от
        воздействия окружающего табачного дыма и последствий потребления
        табака». За нарушение закона также следует отчисление.
      </p>
    </AccordionWrapper>
  );
};

export default Tab1;

import React from "react";
import HowToProcedWrapper from "./style";
import Container from "../../../Common/Container";
import ProcedIcon1 from "../../../Common/Svgs/ProcedIcon1";
import ProcedIcon2 from "../../../Common/Svgs/ProcedIcon2";
import ProcedIcon3 from "../../../Common/Svgs/ProcedIcon3";

const HowToProced = () => {
  return (
    <HowToProcedWrapper>
      <Container>
        <h3 className="title">КАК ПОСТУПИТЬ</h3>
        <div className="wrapper">
          <div className="box">
            <span className="spanTitle">ШАГ 1</span>
            <p className="title">Подготовить необходимый пакет документов:</p>
            <ul>
              <li>документ, удостоверяющий личность (паспорт)</li>
              <li>документ об образовании (аттестат, диплом)</li>
              <li>
                паспорт плательщика или копия, если договор заключается на
                одного из родителей
              </li>
              <li>
                2 фотографии 3х4 копия документа о смене фамилии (при наличии)
              </li>
            </ul>
            <p className="title">
              Дополнительные документы, требуемые для подачи по электронной
              почте или ФГУП «Почта России»*:
            </p>
            <ul>
              <li>
                заявление для поступающих в Академию на программы среднего
                профессионального образования или на программы бакалавриата
                (двусторонняя печать на одном листе)
              </li>
              <li>согласие на обработку персональных данных Мосап</li>
              <li>заявление о согласии на зачисление</li>
              <li>
                * примеры заявлений только для подачи по электронной почте или
                ФГУП «Почта России». Лица, подающие документы лично в приемную
                комиссию не заполняют заявления заранее.
              </li>
            </ul>
            <p className="title">
              Дополнительные документы для иностранных граждан:
            </p>
            <ul>
              <li>перевод всех документов на русский язык</li>
              <li>временная регистрация или копия</li>
              <li>
                нострификация документа об образовании (справка) выданная
                Главэкспертцентром (при необходимости)
              </li>
            </ul>
            <div className="bottom">
              <div className="bottomLi">
                <div className="icon">
                  <ProcedIcon1 />
                </div>
                <p>
                  При намерении участвовать в конкурсе по результатам
                  общеобразовательных вступительных испытаний для отдельных
                  категорий, поступающих – документ, подтверждающий
                  инвалидность.
                </p>
              </div>
              <div className="bottomLi">
                <div className="icon">
                  <ProcedIcon2 />
                </div>
                <p>
                  Для использования особого права или преимущества документ,
                  подтверждающий особое право.
                </p>
              </div>
              <div className="bottomLi">
                <div className="icon">
                  <ProcedIcon3 />
                </div>
                <p>
                  При необходимости создания специальных условий при проведении
                  вступительных испытаний – документ, подтверждающий
                  ограниченные возможности здоровья или инвалидность, требующие
                  создания указанных условий.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <span className="spanTitle">ШАГ 2</span>
            <p className="title">
              Подать документы в Приемную комиссию МОСАП (в соответствии со
              сроками приема на очную, очно-заочную и заочную формы обучения)
              одним из способов:
            </p>
            <ul>
              <li>подать лично</li>
              <li>отправить по электронной почте</li>
              <li>отправить письмом ФГУП «Почта России»</li>
            </ul>
          </div>
          <div className="box">
            <span className="spanTitle">ШАГ 3</span>
            <p className="title">
              Пройти вступительные испытания, проводимые Академией (при
              необходимости).{" "}
            </p>
          </div>
          <div className="box">
            <span className="spanTitle">ШАГ 4</span>
            <p className="title">
              Заключить договор и произвести оплату для завершения процедуры
              поступления
            </p>
            <ul>
              <li>
                Заключение договора и оплата обучения осуществляются в один
                день. Оплата обучения может производиться как наличным, так и
                безналичным расчетом (банковские карты).
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </HowToProcedWrapper>
  );
};

export default HowToProced;

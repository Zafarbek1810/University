import React, { useState } from "react";
import { ProgramsWrapper } from "./style";
import Container from "../../../Common/Container";
import FilterSvg from "../../../Common/Svgs/FilterSvg";
import { Checkbox, Drawer, Switch } from "antd";
import CloseIcon from "../../../Common/Svgs/CloseIcon";

const Programs = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <ProgramsWrapper>
      <Container>
        <div className="top">
        <h3 className="title">ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ</h3>
        <button className="filterBtn" onClick={showDrawer}><FilterSvg/> Фильтры</button>
        </div>
        <div className="wrapper">
          <div className="category">
            <div className="box">
              <h6 className="box__title">Форма обучения</h6>
              <div className="box__content">
                <ul className="box__list">
                  <li className="box__item">
                    <Checkbox />
                    Очная
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Очно-заочная (вечерняя)
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Очно-заочная (выходного дня)
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Заочная
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Дистанционная
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <h6 className="box__title">Виды образования</h6>
              <div className="box__content">
                <ul className="box__list">
                  <li className="box__item">
                    <Checkbox />
                    Бакалавриат
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Колледж
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Дистанционное обучение
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Второе высшее
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Магистратура
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <h6 className="box__title">Направления</h6>
              <div className="box__content">
                <ul className="box__list">
                  <li className="box__item">
                    <Checkbox />
                    Коммерция
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Дизайн
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Экономика
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Государственное и муниципальное управление
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Юриспруденция
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Лингвистика
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Менеджмент
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Психология
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Торговое дело
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Педагогика
                  </li>
                  <li className="box__item">
                    <Checkbox />
                    Информационные системы и технологии
                  </li>
                  <hr />
                  <li className="box__item-switch">
                    С трудоустройством <Switch />
                  </li>
                  <li className="box__item-switch">
                    Рассрочка <Switch />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, index) => (
            <div className="card">
              <div className="card__img">
                <img src="/images/program-item.png" alt="" />
              </div>
              <div className="card__content">
                <span>Юриспруденция</span>
                <h6 className="title">Уголовное право</h6>
              </div>
            </div>
            ))}
          </div>
        </div>
      </Container>


      <Drawer
        title="Фильтры"
        closable={false}
        onClose={onClose}
        open={open}
        placement={"bottom"}
      > 
      <button className="closeIcon" onClick={onClose}>
        <CloseIcon/>
      </button>
        <div className="category">
        <div className="box">
              <h6 className="box__title">Форма обучения</h6>
              <div className="box__content">
                <ul className="box__list">
                  <li className="box__item">
                    Очная
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Очно-заочная (вечерняя)
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Очно-заочная (выходного дня)
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Заочная
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Дистанционная
                    <Checkbox />
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <h6 className="box__title">Виды образования</h6>
              <div className="box__content">
                <ul className="box__list">
                  <li className="box__item">
                    Бакалавриат
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Колледж
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Дистанционное обучение
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Второе высшее
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Магистратура
                    <Checkbox />
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <h6 className="box__title">Направления</h6>
              <div className="box__content">
                <ul className="box__list">
                  <li className="box__item">
                    Коммерция
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Дизайн
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Экономика
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Государственное и муниципальное управление
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Юриспруденция
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Лингвистика
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Менеджмент
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Психология
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Торговое дело
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Педагогика
                    <Checkbox />
                  </li>
                  <li className="box__item">
                    Информационные системы и технологии
                    <Checkbox />
                  </li>
                  <hr />
                  <li className="box__item-switch">
                    С трудоустройством <Switch />
                  </li>
                  <li className="box__item-switch">
                    Рассрочка <Switch />
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </Drawer>
    </ProgramsWrapper>
  );
};

export default Programs;

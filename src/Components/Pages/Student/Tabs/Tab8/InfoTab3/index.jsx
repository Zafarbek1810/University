import React from "react";
import InfoTab3Wrapper from "./style";

const InfoTab3 = () => {
  return (
    <InfoTab3Wrapper>
      <p className="info_title">
        Дорогие студенты МосАП! Отдел трудоустройства рад приветствовать каждого
        нуждающегося в работе и кто планирует начать строить карьеру с первого
        курса!
      </p>
      <p className="info_text">
        И чтобы облегчить ваш путь соискателя мы подготовили вам пошаговые
        рекомендации, которые в разы увеличат ваши шансы построить карьеру,
        будучи еще студентом.
      </p>

      <div className="box">
        <p className="title">
          Пройти стажировку в компании по своему направлению (минимум один
          месяц).
        </p>
        <ul>
          <li>
            Скорее всего, стажировка окажется неоплачиваемой, но вы не
            переживайте, те знания и тот опыт который вы получите, с лихвой
            окупит ваши старания на временной подработке
          </li>
        </ul>
        <p className="title">Для чего это нужно:</p>
        <ul>
          <li>
            Вы получите первоначальные навыки, которые в дальнейшем вам
            пригодятся на каждом месте работы
          </li>
          <li>Вы окончательно утвердитесь в выборе своей специальности</li>
          <li>
            Вы уже будете знать изнутри, как функционирует та или иная
            организация
          </li>
        </ul>
      </div>

      <div className="box">
        <p className="title">Грамотно составить резюме:</p>
        <ul>
          <li>
            Разместите свое резюме на популярных сайтах по подбору персонала
          </li>
          <li>Составьте список желаемых компаний и вышлите им своё резюме</li>
          <li>По возможности проконсультироваться со специалистом</li>
        </ul>
      </div>
    </InfoTab3Wrapper>
  );
};

export default InfoTab3;
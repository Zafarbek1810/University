import React from "react";
import FounderWrapper from "./style";
import Container from "../../../Common/Container";
import Tab6Icon from "../../../Common/Svgs/Tab6Icon";

const Founder = () => {
  return (
    <FounderWrapper>
      <Container>
        <h3 className="title">ОСНОВАТЕЛЬ</h3>
        <p className="founder_info_1">
          Малышков Владимир Иванович — 1997–2010 — Заведующий кафедрой экономики
          и управления предприятиями питания Российского экономического
          университета им. Г.В. Плеханова.{" "}
        </p>

        <div className="bottom">
          <div className="left">
            <img src="/images/founder.png" alt="ss" />
          </div>
          <div className="right">
            <div className="svgs">
              <Tab6Icon />
              <Tab6Icon />
            </div>
            <p className="founder_info_2">
              В условиях рыночной экономики каждый предприниматель может с
              наибольшей отдачей проявлять свои индивидуальные таланты. Для
              страны — с изменениями экономических и социальных условий, с
              меняющейся ролью и характером бизнеса, его идеологии и выполнения
              роли связующего звена от сферы производства к сфере потребителя, —
              первостепенной является задача подготовки высококвалифицированных
              специалистов. Академия продолжает традиции российского
              предпринимательства. Мы готовим талантливых юношей и девушек с
              активной жизненной позицией, профессиональный уровень которых
              отвечает потребностям российского общества на современном этапе.
            </p>
          </div>
        </div>
      </Container>
    </FounderWrapper>
  );
};

export default Founder;

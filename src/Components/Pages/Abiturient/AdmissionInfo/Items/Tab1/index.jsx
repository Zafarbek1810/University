import React from "react";
import { TabWrapper } from "../../style";
import PaperSvg from "../../../../../Common/Svgs/PaperSvg";

export const data = [
  {
    id: 1,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
  {
    id: 2,
    filename:
      "Информация о сроках проведения приема, в том числе о сроках начала и завершения приема документов, проведения вступительных испытаний, завершения приема заявлений о согласии на зачисление на обучение.",
    sig: "sig",
    pdf: "pdf",
  },
  {
    id: 3,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
  {
    id: 4,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
];

const Tab1 = () => {
  return (
    <TabWrapper>
      <div className="wrapper">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="left">
              <div className="filename">{item.filename}</div>
            </div>
            <div className="right">
              <a download={item.sig} href="#" className="sig">
                <PaperSvg />
                .sig
              </a>
              <a download={item.pdf} href="#" className="pdf">
                <PaperSvg />
                .pdf
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="btn">+ Развернуть весь список документов</button>
      </div>
    </TabWrapper>
  );
};

export default Tab1;

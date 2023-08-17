import React from "react";
import PaperSvg from "../../../../../../Common/Svgs/PaperSvg";
import { Comp1Wrapper } from "./style";

const data = [
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
  {
    id: 5,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
  {
    id: 6,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
  {
    id: 7,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
  {
    id: 8,
    filename: "Правила приема на 2023 / 2024 учебный год",
    sig: "sig",
    pdf: "pdf",
  },
];

const Comp1 = () => {
  return (
    <Comp1Wrapper>
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
    </Comp1Wrapper>
  );
};

export default Comp1;

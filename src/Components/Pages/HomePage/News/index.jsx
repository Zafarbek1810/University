import React from "react";
import NewsWrapper from "./style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";

const News = () => {
  const {t} = useTranslation()
  return (
    <NewsWrapper>
      <Container>
        <h4 className="title">{t("news.title")}</h4>
        <div className="cards">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="card">
              <div className="card-img">
                <img src="/images/news.png" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                Уважаемые студенты и педагогические работники чу во &quot;Московская академия предпринимательства&quot;
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="btns">
          <button>+ Ko&apos;proq ko&apos;rsatish</button>
        </div> */}
      </Container>
    </NewsWrapper>
  );
};

export default News;

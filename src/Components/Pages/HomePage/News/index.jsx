import React from "react";
import NewsWrapper from "./style";
import Container from "../../../Common/Container";

const News = () => {
  return (
    <NewsWrapper>
      <Container>
        <h4 className="title">Yangiliklar</h4>
        <div className="cards">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="card">
              <div className="card-img">
                <img src="/images/news.png" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Энди юридик университетга ҳужжат топшириш учун олийгоҳ
                  биносига бориш шарт бўлмайди
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="btns">
          <button>+ Ko'proq ko'rsatish</button>
        </div>
      </Container>
    </NewsWrapper>
  );
};

export default News;

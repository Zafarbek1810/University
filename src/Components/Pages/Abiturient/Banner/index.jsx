import React from "react";
import AbiturientBannerWrapper from "./style";
import Container from "../../../Common/Container";

const AbiturientBanner = () => {
  return (
    <AbiturientBannerWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <h2 className="title">
              В этом разделе мы собрали всю актуальную информацию для
              абитуриентов.
            </h2>
          </div>
          <div className="right">
            <p className="descr">
              Если у вас остались вопросы —сотрудники приемной комиссии всегда
              готовы прийти на помощь!
            </p>
          </div>
        </div>
      </Container>
    </AbiturientBannerWrapper>
  );
};

export default AbiturientBanner;

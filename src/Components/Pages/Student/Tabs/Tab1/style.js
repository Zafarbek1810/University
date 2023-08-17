import { styled } from "styled-components";

const Tab1Wrapper = styled.div`
  .title {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 24px;
  }

  .descr {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 44px;
  }

  .box {
    border-radius: 16px;
    background: #f9fafb;
    padding: 32px;
    margin-bottom: 32px;

    .text1 {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 20px;
    }

    .text2 {
      color: #475467;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
    }
  }

  .accordions {
    .ant-collapse-header {
      position: relative;
      color: #121926;
      font-family: SF Pro Display;
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
    }
    .ant-collapse-expand-icon {
      position: absolute;
      right: 0;
    }
    .ant-collapse-item {
      margin-bottom: 32px !important;
      background: #f9fafb;
      border-radius: 16px;
      border: none;
      padding: 32px;
    }
    .ant-collapse {
      background: transparent;
      width: 100% !important;
      border: none;
    }

    .ant-collapse-content-box {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #001002;
    }
  }

  @media (max-width: 767px) {
    .title {
      font-size: 30px;
      line-height: 38px;
    }

    .descr{
      font-size: 20px;
      line-height: 28px;
    }

    .box{
      padding: 16px;

      .text1 {
        font-size: 20px;
        line-height: 28px;
      }

      .text2 {
        font-size: 20px;
        line-height: 28px;
      }

    }

    .accordions{
      .ant-collapse-header{
        font-size: 20px;
        line-height: 28px;
      }
    }

  }
`;

const AccordionWrapper = styled.div`
  .title {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 16px;
    text-align: start;
    list-style: disc !important;
  }

  .descr {
    color: #475467;
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 32px;
    text-align: start;
  }

  @media (max-width: 767px) {
    .title {
      font-size: 20px;
      line-height: 28px;
    }

    .descr {
      font-size: 20px;
      line-height: 28px;
    }

  }

  @media (max-width: 575px) {
    .title {
      font-size: 16px;
      line-height: 24px;
    }

    .descr {
      font-size: 16px;
      line-height: 24px;
    }

  }
`;
export { Tab1Wrapper, AccordionWrapper };

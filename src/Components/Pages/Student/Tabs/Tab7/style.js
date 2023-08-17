import { styled } from "styled-components";

const Tab7Wrapper = styled.div`
  h3.title {
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
    margin-bottom: 32px;
  }

  .box {
    padding: 32px;

    .title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 20px;
    }

    p {
      color: #475467;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 40px;
    }

    a {
      padding: 16px 33px;
      border-radius: 10px;
      background: #007aff;
      border: none;
      cursor: pointer;
      color: #fff;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  @media (max-width: 767px) {
    h3.title {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 22px;
    }

    .descr {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 24px;
    }

    .box {
      padding: 32px;
      border-radius: 16px;
      background: #f9fafb;

      .title {
        font-size: 24px;
        line-height: 30px;

        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 40px;
      }

      a {
        padding: 16px 33px;
        border-radius: 10px;
        background: #007aff;
        border: none;
        cursor: pointer;
        color: #fff;
        text-align: center;
        font-family: SF Pro Display;
        font-size: 16px;
      }
    }
  }
`;

export { Tab7Wrapper };

import { styled } from "styled-components";

const GraudatesWrapper = styled.div`
  padding: 72px 0;

  .title {
    color: #007aff;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 24px;
  }

  .descr,
  .bottom-descr {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 48px;
  }

  ul {
    margin-bottom: 72px;
    li {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 20px;
      font-weight: 400;
      line-height: 44px;
    }
  }

  @media (max-width: 768px) {
    padding: 72px 0 72px;
    .title {
      font-size: 36px;
      line-height: 48px;
    }
    .descr,
    .bottom-descr {
      font-size: 24px;
      line-height: 32px;
    }
    ul {
      li {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0 0 48px;
    .title {
      font-size: 24px;
      line-height: 32px;
    }
    .descr,
    .bottom-descr {
      font-size: 18px;
      line-height: 24px;
    }
    ul {
      li {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
`;

export { GraudatesWrapper };

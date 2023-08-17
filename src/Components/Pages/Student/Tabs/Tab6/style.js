import { styled } from "styled-components";

const Tab6Wrapper = styled.div`
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
    margin-bottom: 32px;
  }

  .bottom {
    .box1 {
      margin-bottom: 44px;
      position: relative;
      .svgs{
        position: absolute;
        top: -40px;
        left: -20px;
        z-index:-2;
        display: flex;
        gap: 16px;
      }
      p {
        color: #121926;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
      }
    }

    .box2 {
      padding: 32px;
      border-radius: 16px;
      background: #f9fafb;
      h6 {
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
      }
    }
  }

  @media (max-width: 767px) {
    .title {

      font-size: 24px;
      line-height: 30px;
      margin-bottom: 22px;
    }

    .descr {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 24px;
    }

    .bottom {
      .box1 {
        margin-bottom: 24px;
        .svgs{
          top: -20px;
          left: -10px;
          gap: 8px;
        }
        p {
          font-size: 18px;
          line-height: 22px;
        }
      }

      .box2 {
        padding: 16px;
        border-radius: 8px;
        h6 {
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 12px;
        }

        p {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
`;

export { Tab6Wrapper };

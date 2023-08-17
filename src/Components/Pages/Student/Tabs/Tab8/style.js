import { styled } from "styled-components";

const Tab8Wrapper = styled.div`
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
      .svgs {
        position: absolute;
        top: -40px;
        left: -20px;
        z-index: -2;
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

  .info{
    padding: 72px 0;

  .tabs {
    width: 70%;
    text-align: center !important;
    margin-bottom: 48px;
    flex-direction: row;
    margin: auto;

 
    button {
      display: block !important;
      background: transparent;
      border: none;
      outline: none;
      color: #121926;
      padding: 10px 16px;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      cursor: pointer;
      margin-bottom: 44px;

      &:hover {
        color: #007aff;
      }
    }

    .active {
      color: #007aff;
    }
  }

  .component {
    width: 100%;
    div {
      width: 100%;
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
          margin-bottom: 24px;
        }
      }

      .box2 {
        padding: 32px;
        border-radius: 16px;
        h6 {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 12px;
        }

        p {
          font-size: 18px;
          line-height: 22px;
        }

      }
    }

    .info{
      padding: 32px 0;

    .tabs {
      width: 100%;
      text-align: center !important;
      margin-bottom: 48px;
      flex-direction: row;
      margin: auto;

      }
    }
  }


`;

export { Tab8Wrapper };

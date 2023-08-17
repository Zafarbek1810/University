import { styled } from "styled-components";

const LoginWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  background: url("/images/login-back.png");
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 30%;
    background-color: #fff;
    padding: 40px 32px;

    &__title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      text-align: center;
      margin-bottom: 2rem;
    }

    form {
      .label {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 10px;
        border: 1px solid #d0d5dd;
        background: #fff;
        margin-bottom: 20px;
        input {
          padding: 14px 14px 14px 40px;
          border: none;
          border-radius: 10px;
        }
        .leftSvg {
          position: absolute;
          left: 5px;
          z-index: 99;
        }
      }
      span {
        color: #475467;
        font-family: SF Pro Display;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
      }

      button {
        margin-top: 30px;
        cursor: pointer;
        padding: 16px 33px;
        width: 100%;
        border-radius: 10px;
        background: #007aff;
        color: #fff;
        border: none;
      }
    }

    .ant-input-affix-wrapper {
      padding: 0;
      border-radius: 10px;
      padding-right: 15px;
      border: none;
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
    .box {
      width: 100%;
      padding: 40px 32px;
      .box__title {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  @media (max-width: 576px) {
    .box {
      width: 100%;
      padding: 40px 32px;
      .box__title {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
`;

export default LoginWrapper;

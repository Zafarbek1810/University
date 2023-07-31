import { styled } from "styled-components";

const AdmissionWrapper = styled.div`
 padding: 72px 0;
  .tabs {
    width: 100%;
    text-align: center;
    margin-bottom: 48px;
    .title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      margin-bottom: 24px;
    }
    button {
      background: transparent;
      border: none;
      outline: none;
      color: #121926;
      padding: 10px 16px;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      cursor: pointer;

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

  @media (max-width: 992px) {
    .tabs {
      .title {
        font-size: 36px;
        line-height: 48px;
      }
      button {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }

  @media (max-width: 768px) {
    .tabs {
      .title {
        font-size: 24px;
        line-height: 32px;
      }
      button {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 576px) {
    .tabs {
      .title {
        font-size: 20px;
        line-height: 28px;
      }
      button {
        font-size: 10px;
        line-height: 18px;
      }
    }
  }




`

const TabWrapper = styled.div`
  .wrapper{
    padding: 48px 0;
    .item{
      width: 75%;
      display: flex;
      justify-content: space-between;
      padding: 32px 0;
      border-bottom: 1px solid #D0D5DD;

      .left{
        width: 75%;
      }
      .right{
        width: 25%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
      }
    }

  }
  .btns {
  text-align: start;
  button {
    padding: 16px 33px;
    border-radius: 10px;
    background: transparent;
    border: 1px solid #007aff;
    color: #121926;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
      transition: 300ms;
    &:hover{
      background: #007aff;
      cursor: pointer;
      color: #fff;
    }
  }
}

`

export  {AdmissionWrapper, TabWrapper};
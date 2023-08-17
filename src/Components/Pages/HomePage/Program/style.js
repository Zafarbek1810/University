import { styled } from "styled-components";

const ProgramWrapper = styled.div`
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
`;

const TabWrapper = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card {
    width: 32% !important;
    margin-bottom: 24px;
    img {
      width: 100%;
    }
    .bottom {
      padding: 20px 12px 32px;
      border-radius: 0px 0px 16px 16px;
      background: #f9fafb;
    }
    .title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
    }

    .descr {
      color: #475467;
      font-family: SF Pro Display;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }

    button {
      width: 100%;
      padding: 10px;
      background: #fff;
      border: none;
      color: #475467;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg{
        width: 32px;
        margin-left: 8px;
        transition: 300ms ease-in-out;
      }
    }
  }
  
  .card:hover button{
    color: #007aff;
    cursor: pointer;
    svg{
      stroke: #007aff;
      transform: translateX(10px);
    }
  }

  @media (max-width: 992px) {
    .card {
      width: 48% !important;
      .bottom {
        padding: 20px 12px 32px;
        border-radius: 0px 0px 16px 16px;
        background: #f9fafb;
      }
      .title {
        font-size: 20px;
        line-height: 28px;
      }
      .descr {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 100% !important;
      .bottom {
        padding: 20px 12px 32px;
        border-radius: 0px 0px 16px 16px;
        background: #f9fafb;
      }
      .title {
        font-size: 16px;
        line-height: 24px;
      }
      .descr {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }

  @media (max-width: 576px) {
    .card {
      width: 100% !important;
      .bottom {
        padding: 20px 12px 32px;
        border-radius: 0px 0px 16px 16px;
        background: #f9fafb;
      }
      .title {
        font-size: 14px;
        line-height: 22px;
      }
      .descr {
        font-size: 12px;
        line-height: 20px;
      }

      button{
        margin-top: 10px;
        font-size: 14px;
        line-height: 22px;

        svg{
          width: 24px;
          height: 24px;
        }

    }
  }
`;

export { ProgramWrapper, TabWrapper };

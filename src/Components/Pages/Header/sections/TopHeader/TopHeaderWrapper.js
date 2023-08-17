import styled from "styled-components";

const TopHeaderWrapper = styled.div`
  color: #475467;
  padding: 12px 50px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center !important;
  }
  .logo {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .right_side {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    width: 50%;
    span {
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 400;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }

    a {
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 400;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }

    .lang {
      display: flex;
      align-items: center;

      .ant-select-dropdown {
        z-index: 99999 !important;
        border-radius: 0 !important;
      }

      .ant-select-open {
        border: none !important;
      }

      .ant-select-selector {
        border: none !important;
        background-color: transparent !important;
        font-family: "Mulish" !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        line-height: 18px !important;
        color: #000 !important;
        &:active {
          border: none !important;
        }
      }
      .ant-select-arrow .anticon svg {
        color: #fff !important;
      }

      svg {
        width: 18px;
        fill: #000;
      }
    }

    .myBtn {
      border: none;
      border-radius: 10px;
      background: #007aff;
      padding: 16px 33px;
      color: #fff;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
    .content {
      padding: 0 15px;
    }
    .left_side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .location {
        display: none;
      }
      margin-right: 10px;
      align-items: center;
      a {
        width: 50% !important;
      }
      a,
      p {
        width: 50%;
        font-size: 10px;
        margin: 0;
        white-space: nowrap;

        //text 2qatordan keyin korinmaydi
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right_side {
      a:not(:last-child) {
        margin-right: 6px;
      }
      svg {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 550px) {
    .left_side {
      display: none;
    }
    .right_side {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export default TopHeaderWrapper;

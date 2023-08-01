import { styled } from "styled-components";

const DormitoryWrapper = styled.div`
  .top {
    margin-bottom: 48px;
    .title {
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      margin-bottom: 10px;
    }
    .descr {
      color: #475467;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }
  .wrapper {
    display: flex;
    .left {
        width: 50%;
      .item {
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        text-align: left;
        gap: 12px;
        margin-bottom: 48px;
        .icon {
          border-radius: 100px;
          border: 8px solid #e5f1ff;
          background: #d3e7ff;
          width: 48px;
          height: 48px;
          position: relative;
          padding: 12px;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        p {
          color: #121926;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
        }
      }
    }
    .right {
        width: 50%;
        height: auto;
    }
  }
`;

export default DormitoryWrapper;

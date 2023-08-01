import { styled } from "styled-components";

const HowToProcedWrapper = styled.div`
  padding: 72px 0;
  color: #121926;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;

  .wrapper {
    width: 70%;
    .box {
      border-radius: 16px;
      padding: 32px;
      background: #f9fafb;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-top: 48px;
      span {
        color: #007aff;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        padding: 6px 12px;
        border-radius: 10px;
        background: rgba(0, 122, 255, 0.13);
        margin-bottom: 25px;
      }
      p.title {
        color: #000;
        text-align: center;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        text-align: left;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        li {
          color: #475467;
          font-family: SF Pro Display;
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;
          text-align: left;
        }
      }

      .bottom {
        .bottomLi {
          margin-bottom: 32px;
          display: flex;
          text-align: left;
          gap: 12px;
          .icon {
          border-radius: 100px;
          border: 8px solid #e5f1ff;
          background: #d3e7ff;
          width: 48px;
          height: 48px;
          position: relative;
          margin-bottom: 20px;
          padding: 12px;
          svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
          p {
            color: #121926;
            font-family: SF Pro Display;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
    }
  }
`;

export default HowToProcedWrapper;

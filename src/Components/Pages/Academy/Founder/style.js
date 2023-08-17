import { styled } from "styled-components";

const FounderWrapper = styled.div`
  padding: 72px 0;
  h3.title {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 48px;
    text-align: center;
  }

  .founder_info_1 {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    width: 50%;
    margin-bottom: 48px;
  }

  .bottom {
    display: flex;
    gap: 20px;
    .left {
      width: 40%;

      img {
        width: 100%;
      }
    }

    .right {
      width: 60%;
      padding: 40px 20px;
      position: relative;

      .founder_info_2 {
        color: #475467;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
      }
      .svgs {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        display: flex;
        gap: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    h3.title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    
    .founder_info_1 {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
      width: 100%;
    }
    .bottom {
      flex-direction: column;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
        padding: 0;
        .founder_info_2 {
          margin-bottom: 20px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 40px 0;
    h3.title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 20px;
    }

    .founder_info_1 {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
    }

    .bottom {
      flex-direction: column;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
        padding: 0;
        .founder_info_2 {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 20px;

          .svgs {
            top: -50%;
          }

          .founder_info_2 {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;

export default FounderWrapper;

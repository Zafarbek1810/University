import { styled } from "styled-components";

const BannerAcademyWrapper = styled.div`
  padding: 72px 0;
  .wrapper {
    display: flex;

    .left {
      width: 50%;

      .title {
        color: #121926;
        font-family: SF Pro Display;
        font-size: 48px;
        font-weight: 600;
        line-height: 60px;
        margin-bottom: 63px;
      }

      .bottom {
        position: relative;
        padding-left: 20px;
        p {
          color: #121926;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
        }

        .svgs {
          position: absolute;
          top: -50%;
          left: 0;
          z-index: -1;
          display: flex;
          gap: 10px;
        }
      }
    }

    .right {
      width: 50%;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    .wrapper {
      flex-direction: column;
      gap: 20px;

      .left {
        width: 100%;
        .title {
          font-size: 32px;
          line-height: 40px;
          margin-bottom: 20px;
        }

        .bottom {
          padding-left: 0;
          p {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 20px;
          }
        }
      }

      .right {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export default BannerAcademyWrapper;

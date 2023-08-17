import { styled } from "styled-components";

const BannerWrapper = styled.div`
padding: 72px 0;
  .wrapper {
    display: flex;
    gap: 20px;

    .left-title {
      width: 50%;

      h3 {
        color: #121926;
        font-family: SF Pro Display;
        font-size: 48px;
        font-weight: 600;
        line-height: 60px;
        margin-bottom: 24px;
      }

      p {
        color: #121926;
        font-family: SF Pro Display;
        font-size: 32px;
        font-weight: 500;
        line-height: 44px;
        width: 60%;
      }
    }

    .right {
      width: 50%;
      p.descr {
        color: #475467;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;

      .left-title {
        width: 100%;
        margin-bottom: 20px;

        h3 {
          font-size: 32px;
          line-height: 40px;
        }

        p {
          font-size: 24px;
          line-height: 32px;

          width: 100%;
        }
      }

      .right {
        width: 100%;
        margin-bottom: 20px;

        p.descr {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      .left-title {
        h3 {
          font-size: 24px;
          line-height: 32px;
        }

        p {
          font-size: 18px;
          line-height: 24px;
        }
      }

      .right {
        p.descr {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
`;

export default BannerWrapper;

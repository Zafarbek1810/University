import { styled } from "styled-components";

const AbiturientBannerWrapper = styled.div`
/* height: calc(100vh - 250px); */
padding: 72px 0 144px;
  .wrapper {
    display: flex;
    gap: 20px;

    .left {
      width: 50%;
      .title {
        color: #121926;
        font-family: SF Pro Display;
        font-size: 48px;
        font-weight: 600;
        line-height: 60px;
      }
    }

    .right {
      width: 50%;

      .descr {
        color: #475467;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
      }
    }
  }


  @media (max-width: 768px) {
    padding: 72px 0 72px;
    .wrapper {
      flex-direction: column;
      gap: 0;
      .left {
        width: 100%;
        .title {
          font-size: 36px;
          line-height: 48px;
        }
      }
      .right {
        width: 100%;
        .descr {
          font-size: 18px;
          line-height: 24px;

        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 72px 0 72px;
    .wrapper {
      flex-direction: column;
      gap: 0;
      .left {
        width: 100%;
        .title {
          font-size: 24px;
          line-height: 32px;
        }
      }
      .right {
        width: 100%;
        .descr {
          font-size: 16px;
          line-height: 24px;

        }
      }
    }
  }
  
`;

export default AbiturientBannerWrapper;

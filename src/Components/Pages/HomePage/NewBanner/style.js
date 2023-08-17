import { styled } from "styled-components";

const NewBannerWrapper = styled.div`
  height: calc(100vh - 64px);
  padding-top: 80px;
  .wrapper {
    display: flex;
    gap: 55px;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    width: 50%;
    h1.title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 60px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }

    p.descr {
      color: #475467;
      font-family: SF Pro Display;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }

  .right {
    width: 45%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding-top: 120px;
    margin-bottom: 40px;
    .wrapper {
      flex-direction: column-reverse;
      gap: 0;
      align-items: flex-start;
      justify-content: space-between;
    }

    .left {
      width: 100%;
      h1.title {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 16px;
      }

      p.descr {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .right {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 480px) {
    .left {
      h1.title {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 16px;
      }

      p.descr {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 320px) {
    .left {
      h1.title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
      }

      p.descr {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`;

export default NewBannerWrapper;

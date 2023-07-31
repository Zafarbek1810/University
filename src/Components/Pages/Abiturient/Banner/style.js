import { styled } from "styled-components";

const AbiturientBannerWrapper = styled.div`
height: calc(100vh - 250px);
padding: 72px 0;
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
`;

export default AbiturientBannerWrapper;

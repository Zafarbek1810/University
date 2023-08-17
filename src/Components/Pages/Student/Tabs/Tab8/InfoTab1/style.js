import { styled } from "styled-components";

const InfoTab1Wrapper = styled.div`
  .box {
    border-radius: 16px;
    background: #f9fafb;
    padding: 2rem;

    li {
      color: #475467;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
    }
  }

  @media (max-width: 767px) {
    .box {
      padding: 1rem;
      li {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
`;

export default InfoTab1Wrapper;

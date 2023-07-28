import { styled } from "styled-components";

const CardWrapper = styled.div`
  .card {
    img{
      width: 100%;
    }
    border: 1px solid red;
    .bottom{
      padding: 20px 12px 32px;
      border-radius: 0px 0px 16px 16px;
      background: #F9FAFB;
    }
    .title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
    }

    .descr {
      color: #475467;
      font-family: SF Pro Display;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
  }
`;

export { CardWrapper };

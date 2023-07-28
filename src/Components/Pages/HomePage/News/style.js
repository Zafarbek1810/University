import { styled } from "styled-components";

const NewsWrapper = styled.div`
  padding: 72px 0;

  .title {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    margin-bottom: 48px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      display: flex;
      flex-direction: column;
      width: 32%;
      margin-bottom: 48px;

      .card-img {
        img {
          border-radius: 16px 16px 0 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .card-body {
        padding: 20px 12px 32px;
        border-radius: 0px 0px 16px 16px;
        background: #f9fafb;
        h5 {
          color: #121926;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
        }
      }
    }
  }

  .btns {
    text-align: center;
    button {
      padding: 16px 33px;
      border-radius: 10px;
      background: transparent;
      border: 1px solid #007aff;
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
        transition: 300ms;
      &:hover{
        background: #007aff;
        cursor: pointer;
        color: #fff;
      }
    }
  }


  @media (max-width: 768px) {
    .title{
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;

    }
    .cards{
      .card{
        width: 48%;
      }

    }
  }

  @media (max-width: 576px) {
    .title{
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
    }
    .cards{
      .card{
        width: 100%;
      }

    }
  }
  

    
`;

export default NewsWrapper;

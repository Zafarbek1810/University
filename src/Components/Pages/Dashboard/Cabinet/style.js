import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  .wrapper {
    display: flex;
    height: 100%;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
      border-right: 1px solid #555;
      height: 100%;
      padding: 20px;
      .img{
        margin-bottom: 50px;
      }

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        
      }

      h3{
        text-align: center;
        font-size: 28px;
        font-weight: 700;
      }
    }

    .right {
      width: 70%;
      padding: 20px;
      h2{
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 50px;
      }

      .item{
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
        label{
          font-size: 20px;
          font-weight: 700;
        }
        p{
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }


  @media (max-width: 580px) {
      .wrapper{
        flex-direction: column;

        .left{
          border-right: none;
          width: 100%;
        }

        .right{
          width: 100%;
        }
      }
  }
`;

export { StyledWrapper };

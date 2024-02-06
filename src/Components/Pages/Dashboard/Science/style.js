import styled from "styled-components";

const StyledWrapper = styled.div`
  .downloadBtn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 150px;
    span{
        width: 100%;
        margin-bottom: 10px;
    }

    p {
        width: 100%;
      text-align: center;
    }

    svg {
      width: 100px;
      height: 100px;
      text-align: center;
      margin: auto;
    }
  }

  .tabWrap {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export { StyledWrapper };

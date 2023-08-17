import { styled } from "styled-components";

const Comp1Wrapper = styled.div`

.wrapper{
    padding: 48px 0;
    .item{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 32px 0;
      border-bottom: 1px solid #D0D5DD;

      .left{
        width: 75%;
      }
      .right{
        width: 25%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
      }
    }

  }

`

export { Comp1Wrapper };
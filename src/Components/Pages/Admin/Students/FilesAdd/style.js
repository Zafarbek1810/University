import styled from "styled-components";

const FileAddWrapper = styled.div`
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table{
    margin-top: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px; */

    thead{
      width: 100%;
      tr{
        display: flex;
        /* background: #006786; */
        /* border-radius: 6px 6px 0px 0px; */
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        
        th.col{
          font-style: normal;
          font-weight:500;
          font-size: 16px;
          line-height: 24px;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: "Azo sans";
          padding: 15px 12px 10px 20px;

        }
      }
    }

    tbody{
      background: #fff;
      tr{
        display: flex;
        /* border-bottom: 1px solid rgba(159, 160, 184, 0.3); */
        justify-content: space-between;
        
        td.col {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.7);
          text-align: center;
          font-family: "Azo sans";
          padding: 5px;
          cursor: pointer;
        }

        img{
          width: 50px;
          height: 50px;
        }

        .btns {
          width: 40%;
          display: flex;
          margin-left: 20px;
          justify-content: start;

          button {
            cursor: pointer;
            transition: 300ms;
            background: transparent;

            svg {
              fill: none;
              width: 20px;
              height: 20px;
              /* fill: rgb(253, 181, 40); */
            }
          }
        }
      }

    }
  }

  .wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 75vh;
    margin-bottom: 10px;

    .inner{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      border: 1px solid rgba(159, 160, 184, 0.3);
    }

    .imgs{
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      .noItem{
        width: 150px;
        height: 150px;
      }
    }
  }

  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }


`

export default FileAddWrapper;
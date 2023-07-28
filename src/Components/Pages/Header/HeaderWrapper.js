import styled from "styled-components";

const HeaderWrapper = styled.div`
  z-index: 1000;

  .logo {
    flex-shrink: 0;
    color: #000;
    text-decoration: none;
    font-size: 24px;
    color: #000;
    letter-spacing: 10px;
    width: 15%;

    img {
      width: 100% !important;
      height: auto;
    }

    span {
      text-transform: uppercase;
      width: 80%;
      font-size: 24px;
      line-height: 18px;
      letter-spacing: 0.5px;
      font-weight: 900;
      color: #000;
      letter-spacing: 10px;
      font-family: SF Pro Display;
    }

    a {
      color: #000;
      text-decoration: none;
      font-family: SF Pro Display;
    }
  }

  .header {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(-10px);
    transition: transform 0.3s ease !important;
    z-index: 999;
    height: 100px !important;

    svg {
      color: #000 !important;
      flex-shrink: 0;
      width: 10px;
    }

  }

  .header2 {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5555;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.3s ease-out !important;
    /* height: 100px; */
    font-family:SF Pro Display;

    p {
      color: #000;
      font-family: Nunito Sans;
      font-weight: 700;

      &:hover {
        color: #007AFF !important;
      }
    }

    svg {
      color: #000 !important;
      flex-shrink: 0;
      width: 10px;
    }

    .myDefaultButton {
      background: #002F49;
      color: #fff !important;
      font-weight: 700;
      font-family: Nunito Sans;
      text-transform: uppercase;
      border: none;
      padding:20px 10px;
      width: 200px;
      transition: 300ms;

      &:hover {
        background-color: #fff;
        color: #000 !important;
        border: 1px solid #002F49;
      }
    }

    a,
    button {
      color: black !important;
      border-color: black !important;
    }

    .logo {
      flex-shrink: 0;
      color: #000;
      text-decoration: none;
      font-size: 24px;
      color: #8073b2;
      letter-spacing: 10px;
      font-family: sans-serif;

      a {
        color: #8073b2;
      }

      span {
        text-transform: uppercase;
        width: 80%;
        font-size: 24px;
        line-height: 18px;
        letter-spacing: 0.5px;
        font-weight: 900;
        color: #8073b2;
        letter-spacing: 10px;
        font-family: sans-serif;
      }
    }

    .links_cont {
      .navs {
        svg {
          color: transparent;
        }

        .angle-svg {
          color: #000 !important;
        }
      }
    }

    .burger-btn {
      &:after,
      &:before {
        background-color: #222;
      }

      span {
        background-color: #222;
      }
    }

    /* .burger-list-wrapper {
      background-color: #fff;
    } */
  }

  .content {
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */

  

    .links_cont {
      display: flex;
      justify-content: center;
      margin: 0;

      li {
        list-style: none;

        &:hover {
          svg {
            color: #007AFF !important;
          }

          p {
            color: #007AFF !important;
            position: relative;
          }

        }
      }
      .navs {
        flex-shrink: 0;
        position: relative;
        padding: 30px 20px;
        display: flex;

        .arrow-svg {
          font-size: 13px;
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-55%);
          color: transparent;
          transition: 0.3s;
          line-height: 1.2;
        }

        .angle-svg {
          font-size: 13px;
          margin-left: 5px;
          color: #fff;
          transition: color 0.1s ease;
        }

        &:hover {
          .arrow-svg {
            left: 0;
            color: white;
          }
        }

        p {
          font-size: 13px;
          line-height: 1.2;
        }
      }

      a {
        text-transform: uppercase;
        text-decoration: none;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  // --------------------------- BURGER STYLES ----------------------------------
  .getBtn {
    cursor: pointer;
  }


  .burger-btn {
    display: none;
    position: relative;

    cursor: pointer;
    width: 40px;
    height: 40px;

    &:after,
    &:before {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      background-color: #000;

      content: "";
      transition: transform 0.3s ease;
    }

    &:before {
      top: 5px;
      transform-origin: left top;
    }

    &:after {
      transform-origin: left bottom;
      bottom: 5px;
    }

    span {
      width: 100%;
      height: 4px;
      background-color: #000;
      transition: transform 0.3s ease;
    }
  }

  .burger-list-wrapper {
    display: none;
  }

  @media (max-width: 1024px) {
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    .content {
      padding: 0 30px;
      background-color: #fff;
    }
    .header {
      /* background-color: transparent; */
      padding-top: 35px;
    }

    .header2 {
    }

    .navbar-wrapper {
      display: none !important;
    }

    .burger-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .getBtn {
      display: none;
    }

    .burger-list-wrapper {
      height: calc(100vh - 59px);
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 15px;
      min-width: 300px;
      box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 5px;

      a {
        color: #222;
      }

      overflow: auto;

      .burger-list {
        display: flex;
        flex-direction: column;
      }

      .burger-link {
        cursor: pointer;
        display: block;
        color: #222;
        padding: 6px 0;
        font-size: 15px;
        text-transform: uppercase;

        &:hover {
          color: var(--primary) !important;
        }
      }

      .burger-getBtn {
        border-color: #222;
        justify-content: center;
        color: #222;
      }

      .drop-link {
        span {
          display: inline-block;
          margin-right: 10px;
        }

        svg {
          transition: all 0.3s ease;
        }
      }

      .burger-drop-wrapper {
        overflow: hidden;
        transition: max-height 0.3s ease;

        li {
          margin-left: 15px;

          a {
            cursor: pointer;
            display: block;
            color: #222;
            padding: 6px 0;
            font-size: 15px;
            text-transform: uppercase;

            &:hover {
              color: var(--primary) !important;
            }
          }
        }
      }

      transition: left 0.5s ease;

      &.close {
        left: -100%;
      }

      &.open {
        left: 0;
      }
    }
  }
`;

export default HeaderWrapper;

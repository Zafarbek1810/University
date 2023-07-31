import styled from "styled-components";

const MainHeaderWrapper = styled.div`
  background-color: transparent;
  z-index: 1000;
  .logo {
    flex-shrink: 0;
    color: #000;
    text-decoration: none;
    font-size: 24px;
    color: #000;
    width: 14%;
    img {
      width: 100% !important;
      height: auto;
    }

    span {
      width: 80%;
      font-size: 24px;
      line-height: 18px;
      letter-spacing: 0.5px;
      font-weight: 900;
      color: #000;
      letter-spacing: 10px;
      font-family: SF Pro Display;
    }
  }

  .content {
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */

    .links_cont {
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }

      .navs {
        flex-shrink: 0;
        position: relative;
        display: flex;
      }

      a {
        text-decoration: none;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  .header {
    background-color: transparent !important;
    position: absolute;
    left: 0;
    right: 0;
    transition: transform 0.3s ease !important;
    z-index: 999;
    min-height: 100px !important;
    display: flex;

    .logo {
      display: none;
    }

    .navs {
      p {
        color: #fff;
        font-family: SF Pro Display;
        font-weight: 500;
        transition: 300ms;
        text-transform: capitalize;

        &:hover {
          color: #007aff;
          transition: 300ms;
        }
      }

      .active {
        color: #007aff;
      }
    }

    .links_cont {
      width: 80% !important;
      margin: auto;
      padding-left: 0;
      display: flex;
      justify-content: space-between !important;
    }
  }

  .header2 {
    background-color: #fff;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5555;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 100px;
    font-family: SF Pro Display;
    transform: translateY(0);
    transition: 0.3s ease-in !important;
    p {
      color: #000;
      font-family: SF Pro Display !important;
      font-weight: 500;

      &:hover {
        transition: 300ms;
        color: #007aff;
      }
    }

    a,
    button {
      color: black !important;
      border-color: black !important;
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
  }

  // --------------------------- BURGER STYLES ----------------------------------
  .getBtn {
    cursor: pointer;
  }
  .burger-btn {
    display: none;
    position: relative;
    margin-left: auto;
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
    .logo {
      width: 30%;
    }
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
      background-color: #fff !important;
      min-height: 100px !important;

      .logo {
        display: block;
      }
    }

    .header2 {
      background-color: #fff !important;
    }

    .links_cont {
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

  @media (max-width: 768px) {
    .logo {
      width: 40% !important;
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 50% !important;
    }
  }
`;

export { MainHeaderWrapper };

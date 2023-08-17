import React from "react";
import LoginWrapper from "./style";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";

const Login = () => {
  return (
    <LoginWrapper>
      <div className="box">
        <div className="box__title">АВТОРИЗАЦИЯ</div>
        <div className="box__form">
          <form>
            <div className="label">
              <div className="leftSvg">
                <FormUserSvg />
              </div>
              <Input
                className="input"
                type="text"
                name="login"
                placeholder="Почта "
              />
            </div>
            <div className="label">
            <div className="leftSvg">
                <FormUserSvg />
              </div>
              <Input.Password
                placeholder="Пароль "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
              <span>Минимум 8 символов</span>

              <button>Заявка на обучение</button>

          </form>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import LoginWrapper from "./style";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import AuthProvider from "../../../../Data/AuthProvider";
import { useContextSelector } from "use-context-selector";
import UserContext from "../../../../Context/UserContext/Context";
import { toast } from "react-toastify";

const Login = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const { isAuth, user: currentUser } = useContextSelector(
    UserContext,
    (ctx) => ctx.state
  );

  const loginContext = useContextSelector(
    UserContext,
    (ctx) => ctx.actions.login
  );

  console.log(isAuth,currentUser);
  


  useEffect(() => {
    if (isAuth && currentUser) {
      switch (currentUser.roles) {
        case "ROLE_STUDENT": {
          router.replace("/dashboard/cabinet");
          break;
        }
        case "ROLE_ADMIN": {
          router.replace("/admin/university");
          break;
        }
      }
    }
  }, [isAuth, currentUser, loading]);

  const onFinish = (values) => {
    const body = { username: values.login, password: values.password };
    setLoading(true);
    AuthProvider.login(body)
      .then((data) => {
        console.log(data.data.data);
        localStorage.setItem("token", data.data.data.token);
        loginContext(data.data.data);
      })
      .catch((err) => {
        toast.warning("Login yoki parol noto'g'ri");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <LoginWrapper>
        <div className="box">
          <div className="box__title">{t("student.login.title")}</div>
          <div className="box__form">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              size="large"
            >
              <Form.Item
                name="login"
                rules={[
                  {
                    required: true,
                    message: t("student.login.logReq"),
                  },
                ]}
              >
                <div className="label">
                  <div className="leftSvg">
                    <FormUserSvg />
                  </div>
                  <Input
                    className="input"
                    type="text"
                    name="login"
                    placeholder={t("student.login.log")}
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: t("student.login.passReq")
                  },
                ]}
              >
                <div className="label">
                  <div className="leftSvg">
                    <FormUserSvg />
                  </div>
                  <Input.Password
                    placeholder={t("student.login.pass")}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
              </Form.Item>

              <Button
                type="primary"
                style={{ width: "100%" }}
                htmlType="submit"
              >
                {t("student.login.btn")}
              </Button>
            </Form>
          </div>
        </div>
    </LoginWrapper>
  );
};

export default Login;

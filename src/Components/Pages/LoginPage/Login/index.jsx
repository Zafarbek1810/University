import React, { useState } from "react";
import LoginWrapper from "./style";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";
import students  from '../students.json'

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState()

  function loginMosTushishi(array, targetLogin, targetPass) {
    for (const student of array) {
        if (student.login === targetLogin && student.password === targetPass) {
            return true;
        }
    }
    return false;
}


  const onFinish = (values) => {
    // console.log("Success:", values);
    if(loginMosTushishi(students, values.login, values.password)){
      console.log('succes')
      setSuccess(true);
      setName(students.filter(v=>v.login==values.login)[0].name)
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(students)

  

  return (
    <LoginWrapper>
      {
        !success ?  <div className="box">
        <div className="box__title">АВТОРИЗАЦИЯ</div>
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
                  message: "Login kiriting",
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
                  placeholder="Логин "
                />
              </div>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Parol kiriting",
                },
              ]}
            >
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
            </Form.Item>
            <span>Минимум 8 символов</span>

            <Button type="primary" style={{ width: "100%" }} htmlType="submit">
              Заявка на обучение
            </Button>
          </Form>
        </div>
      </div> : 
      <h3 style={{width:"60%", textAlign:'center'}}>Xurmatli {name}, bizda hozirda texnik ishlar olib borilmoqda, tez orada bu kamchiliklar to`g`irlanadi&#128522;</h3>
      }
     
    </LoginWrapper>
  );
};

export default Login;

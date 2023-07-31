import React from "react";
import FormWrapper from "./style";
import Container from "../../../Common/Container";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";
import FormPhoneSvg from "../../../Common/Svgs/FormPhoneSvg";
import FormEmailSvg from "../../../Common/Svgs/FormEmailSvg";

const Form = () => {
  return (
    <Container>
      <FormWrapper>
        <h3 className="title">
        Получи консультацию приемной комиссии, оставив заявку
        </h3>
        <p className="descr">
        Получи консультацию приемной комиссии, оставив заявку
        </p>
        <form>
          <div className="label">
            <FormUserSvg />
            <input type="text" placeholder="Имя" />
          </div>
          <div className="label">
            <FormPhoneSvg />
            <input type="number" placeholder="+998" 
            />
          </div>
          <div className="label">
            <FormEmailSvg />
            <input required type="email" placeholder="E-mail" />
          </div>
          <button type="submit" className="myBtn">
          Записаться
          </button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Form;

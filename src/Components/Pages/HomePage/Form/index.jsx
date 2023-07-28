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
          Ariza qoldirish orqali qabul komissiyasidan maslahat oling
        </h3>
        <p className="descr">
          Tugmani bosish orqali siz Maxfiylik siyosatiga va axborot
          byulletenlarini olishga rozilik bildirasiz
        </p>
        <form>
          <div className="label">
            <FormUserSvg />
            <input type="text" placeholder="Ism familiya" />
          </div>
          <div className="label">
            <FormPhoneSvg />
            <input type="number" placeholder="+998" 
            />
          </div>
          <div className="label">
            <FormEmailSvg />
            <input required type="email" placeholder="Email" />
          </div>
          <button type="submit" className="myBtn">
            Ro’yxatdan o‘tish
          </button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Form;

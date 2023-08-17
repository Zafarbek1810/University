import React from "react";
import PartnerFormWrapper from "./style";
import Container from "../../../Common/Container";
import { Controller, useForm } from "react-hook-form";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";
import FormPhoneSvg from "../../../Common/Svgs/FormPhoneSvg";
import { PatternFormat } from "react-number-format";
import FormEmailSvg from "../../../Common/Svgs/FormEmailSvg";

const PartnerForm = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useForm();

  return (
    <PartnerFormWrapper>
      <Container>
        <h5 className="title">Отправить запрос о сотрудничестве</h5>
        <p>
          Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности и на
          получение рассылок
        </p>
        <form>
          <div className="label">
            <FormUserSvg />
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder="Имя"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label">
            <FormPhoneSvg />
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 16,
                maxLength: 16,
              }}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <PatternFormat
                  format="+998## ### ## ##"
                  allowEmptyFormatting
                  name="phone"
                  value={value}
                  style={{ width: "100%" }}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
          <div className="label">
            <FormEmailSvg />
            <input
              control={control}
              className="form-control"
              required
              {...register("email", { required: true })}
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div className="label2">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder="Название компании и должность"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label2">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder="Город"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label2">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder="Сайт компании"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label3">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder="Ваше предложение"
              required
              {...register("name", { required: true })}
            />
          </div>

          <div className="submit-btn">Записаться</div>
        </form>
      </Container>
    </PartnerFormWrapper>
  );
};

export default PartnerForm;

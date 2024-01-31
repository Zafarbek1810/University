import React from "react";
import FormWrapper from "./style";
import Container from "../../../Common/Container";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";
import FormPhoneSvg from "../../../Common/Svgs/FormPhoneSvg";
import FormEmailSvg from "../../../Common/Svgs/FormEmailSvg";
import { Controller, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { control, formState: { errors }, register } = useForm();
  const { t } = useTranslation();

  return (
    <Container >
      <FormWrapper>
        <h3 className="title">
          {t("form.title")}
        </h3>
        <p className="descr">
        {t("form.subtitle")}
        </p>
        <form>
          <div className="label">
            <FormUserSvg />
            <input control={control} className="form-control" type="text" placeholder={t("form.name")} required
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
            <input control={control} className="form-control" required {...register("email", { required: true })}  type="email" placeholder="E-mail" />
          </div>
          <button type="submit" className="myBtn">
          {t("form.button")}
          </button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Form;

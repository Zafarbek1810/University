import React from "react";
import PartnerFormWrapper from "./style";
import Container from "../../../Common/Container";
import { Controller, useForm } from "react-hook-form";
import FormUserSvg from "../../../Common/Svgs/FormUserSvg";
import FormPhoneSvg from "../../../Common/Svgs/FormPhoneSvg";
import { PatternFormat } from "react-number-format";
import FormEmailSvg from "../../../Common/Svgs/FormEmailSvg";
import { useTranslation } from "react-i18next";

const PartnerForm = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useForm();
  const { t } = useTranslation();

  return (
    <PartnerFormWrapper>
      <Container>
        <h5 className="title">{t("partnerPage.form.title")}</h5>
        <p>
        {t("partnerPage.form.subtitle")}
        </p>
        <form>
          <div className="label">
            <FormUserSvg />
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder={t("partnerPage.form.name")}
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
              placeholder={t("partnerPage.form.company")}
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label2">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder={t("partnerPage.form.city")}
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label2">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder={t("partnerPage.form.site")}
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="label3">
            <input
              control={control}
              className="form-control"
              type="text"
              placeholder={t("partnerPage.form.suggestion")}
              required
              {...register("name", { required: true })}
            />
          </div>

          <div className="submit-btn">{t("partnerPage.form.btn")}</div>
        </form>
      </Container>
    </PartnerFormWrapper>
  );
};

export default PartnerForm;

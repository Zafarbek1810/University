import React, { useEffect, useState } from "react";
import CloseIconSvg from "../../../../Common/Svgs/CloseIconSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FacultiesProvider from "../../../../../Data/FacultiesProvider";
import Select from "react-select";
import SpecialtiesProvider from "../../../../../Data/SpecialtiesProvider";
import { ModalContent, ModalHeader } from "../AddStudent/style";
import StudentProvider from "../../../../../Data/StudentProvider";
import { Radio } from "antd";

const AddPayment = ({ onCloseModal3, paymentObj }) => {
  const { register, handleSubmit, control, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [paymentTypeId, setPaymentTypeId] = useState(null);
  const [valyuta, setValyuta] = useState(null);

  const onChange1 = (e) => {
    setValyuta(e.target.value);
  };
  const onChange2 = (e) => {
    setPaymentTypeId(e.target.value);
  };

  
  const onSubmit = async (values) => {
    const body = {
      amount: values.amount,
      currency: valyuta,
      paymentType: paymentTypeId,
    };

    setLoading(true);
    StudentProvider.paymentAdd(paymentObj?.id, body)
      .then((res) => {
        console.log(res);
        reset();
        toast.success("Muvaffaqiyatli bajarildi!");
        onCloseModal3();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

 
  return (
    <>
      <ModalHeader className="modal-header">
        <h2 className="title">To&apos;lov qo&apos;shish</h2>
        <button className="closeSvg" onClick={onCloseModal3}>
          <CloseIconSvg />
        </button>
      </ModalHeader>
      <ModalContent>
        <form
          className="p-3"
          style={{ width: 600 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="label">
            <label>Summa</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Summa"}
              {...register("amount", { required: true })}
            />
          </div>
          <div className="label">
          <label>Valyuta</label>
          <Radio.Group onChange={onChange1} value={valyuta}>
            <Radio value={"UZS"}>UZS</Radio>
            <Radio value={"USD"}>USD</Radio>
            <Radio value={"EUR"}>EUR</Radio>
          </Radio.Group>
          </div>
          <div className="label">
          <label>Qaysi davr?</label>
          <Radio.Group onChange={onChange2} value={paymentTypeId}>
            <Radio value={"QUARTERLY"}>Choraklik</Radio>
            <Radio value={"SEMESTERLY"}>Semestr</Radio>
            <Radio value={"ANNUALLY"}>Yillik</Radio>
          </Radio.Group>
          </div>
          <button
            type="submit"
            className="btn btn-success btn-rounded m-1"
            style={{ display: "flex" }}
          >
            Qo&apos;shish {loading && <ButtonLoader />}
          </button>
        </form>
      </ModalContent>
    </>
  );
};

export default AddPayment;

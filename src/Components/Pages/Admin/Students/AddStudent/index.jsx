import React, { useEffect, useState } from "react";
import { AddSpecialWrapper, ModalContent, ModalHeader } from "./style";
import CloseIconSvg from "../../../../Common/Svgs/CloseIconSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FacultiesProvider from "../../../../../Data/FacultiesProvider";
import Select from "react-select";
import SpecialtiesProvider from "../../../../../Data/SpecialtiesProvider";
import StudentProvider from "../../../../../Data/StudentProvider";

const AddStudent = ({ onCloseModal }) => {
  const { register, handleSubmit, control, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [special, setSpecial] = useState([]);
  const [specialId, setSpecialId] = useState(null);
  const [studentId, setStudentId] = useState(null)

  useEffect(() => {
    SpecialtiesProvider.getAllSpecial()
      .then((res) => {
        setSpecial(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const uploadImg = async (file) => {
  //   const formdata = new FormData();
  //   formdata.append("file", file);
  //   const res = await StudentProvider.uploadFile(studentId, formdata);
  //   console.log(res.data, "rasm");
  //   return res.data;
  // };

  const onSubmitStudent = async (values) => {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      password: values.password,
      roleName: "ROLE_STUDENT",
      fieldOfStudyId: specialId,
      address: values.address,
      numberOfPersonalDocument: values.numberOfPersonalDocument,
      contractNumber: values.contractNumber,
    };

    setLoading(true);
    const rest = await StudentProvider.createStudent(body)
      .then((res) => {
        setStudentId(res.data.data?.id);
        StudentProvider.uploadFile(res.data.data?.id, values.image[0])

        toast.success(res.data?.message);
        reset();
        onCloseModal();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });



  };

  const optionSpecial = special.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  return (
    <AddSpecialWrapper>
      <ModalHeader className="modal-header">
        <h2 className="title">Talaba qo`shish</h2>
        <button className="closeSvg" onClick={onCloseModal}>
          <CloseIconSvg />
        </button>
      </ModalHeader>
      <ModalContent>
        <form
          className="p-3"
          style={{ width: 600 }}
          onSubmit={handleSubmit(onSubmitStudent)}
        >
          <div className="div">
            <div className="label">
              <label>Yo&apos;nalishlar</label>
              <Controller
                control={control}
                name="region"
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Select
                    className="select  w-100 mb-4"
                    value={value}
                    placeholder="Yo'nalish tanlang"
                    options={optionSpecial}
                    onBlur={onBlur}
                    onChange={(v) => {
                      onChange(v);
                      setSpecialId(v.value);
                    }}
                    ref={ref}
                  />
                )}
              />
              <div className="label">
                <label>Familyasi</label>
                <input
                  autoComplete="off"
                  className="form-control"
                  placeholder={"Familyasi"}
                  {...register("lastName", { required: true })}
                />
              </div>

              <div className="label">
                <label>Parol</label>
                <input
                  autoComplete="off"
                  className="form-control"
                  placeholder={"Parol"}
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <div className="label">
              <label>Shahsiy hujjat raqami</label>
              <input
                autoComplete="off"
                className="form-control"
                placeholder={"Shahsiy hujjat raqami"}
                {...register("numberOfPersonalDocument", { required: true })}
              />
            </div>
            <div className="label">
              <label>Rasm</label>
              <input
                type="file"
                className="form-control"
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div className="div">
            <div className="label">
              <label>Ismi</label>
              <input
                autoComplete="off"
                className="form-control"
                placeholder={"Ismi"}
                {...register("firstName", { required: true })}
              />
            </div>

            <div className="label">
              <label>Username</label>
              <input
                autoComplete="off"
                className="form-control"
                placeholder={"Username"}
                {...register("username", { required: true })}
              />
            </div>

            <div className="label">
              <label>Addres</label>
              <input
                autoComplete="off"
                className="form-control"
                placeholder={"Addres"}
                {...register("address", { required: true })}
              />
            </div>

            <div className="label">
              <label>Shartnoma nomeri</label>
              <input
                autoComplete="off"
                className="form-control"
                placeholder={"Shartnoma nomeri"}
                {...register("contractNumber", { required: true })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success btn-rounded m-1"
            style={{ display: "flex" }}
          >
            Qo`shish {loading && <ButtonLoader />}
          </button>
        </form>
      </ModalContent>
    </AddSpecialWrapper>
  );
};

export default AddStudent;

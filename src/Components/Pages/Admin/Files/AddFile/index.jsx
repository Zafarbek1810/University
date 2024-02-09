import React, { useEffect, useState } from "react";
import {
  AddSpecialWrapper,
  ModalHeader,
} from "../../Students/AddStudent/style";
import CloseIconSvg from "../../../../Common/Svgs/CloseIconSvg";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import StudentProvider from "../../../../../Data/StudentProvider";
import ButtonLoader from "../../../../Common/ButtonLoader";
import ScienceProvider from "../../../../../Data/ScienceProvider";
import { toast } from "react-toastify";
import { ModalContent } from "../style";

const AddFile = ({ onCloseModal }) => {
  const { register, handleSubmit, control, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [science, setScience] = useState([]);
  const [scienceId, setScienceId] = useState(null);

  useEffect(() => {
    ScienceProvider.getAllScience()
      .then((res) => {
        setScience(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await ScienceProvider.uploadFile(
        scienceId,
        values.customName,
        values.image[0]
      );
      await onCloseModal();
      toast.success("Muvaffaqiyati biriktirildi!");
    } catch (error) {
      toast.error("Xatolik!");
    }
  };

  const optionSpecial = science.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  return (
    <AddSpecialWrapper>
      <ModalHeader className="modal-header">
        <h2 className="title">Fanga fayl biriktirish</h2>
        <button className="closeSvg" onClick={onCloseModal}>
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
            <label>Fanlar</label>
            <Controller
              control={control}
              name="region"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  className="select  w-100 mb-4"
                  value={value}
                  placeholder="Fanni tanlang"
                  options={optionSpecial}
                  onBlur={onBlur}
                  onChange={(v) => {
                    onChange(v);
                    setScienceId(v.value);
                  }}
                  ref={ref}
                />
              )}
            />
          </div>
          <div className="label">
            <label>Fayl nomi</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Fayl nomi"}
              {...register("customName", { required: true })}
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

export default AddFile;

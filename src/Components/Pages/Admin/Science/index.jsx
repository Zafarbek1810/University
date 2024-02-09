import React, { useEffect, useState } from "react";
import SpecialtiesWrapper from "./style";
import SpecialtiesProvider from "../../../../Data/SpecialtiesProvider";
import { Button, Drawer, IconButton } from "@mui/material";
import EditSvg from "../../../Common/Svgs/EditSvg";
import MinLoader from "../../../Common/MinLoader";
import AddSpecial from "./AddScience";
import UpdateSpecial from "./UpdateSceince";
import ScienceProvider from "../../../../Data/ScienceProvider";

const Science = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [special, setSpecial] = useState([]);
  const [editSpecial, setEditSpecial] = useState({});

  const handleEditFaculty = (obj) => {
    console.log(obj);
    setIsOpenModal2(true);
    setEditSpecial(obj);
  };

  useEffect(() => {
    setLoading(true);
    ScienceProvider.getAllScience()
      .then((res) => {
        setSpecial(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isOpenModal, isOpenModal2]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };
  const onCloseModal2 = () => {
    setIsOpenModal2(false);
  };
  return (
    <SpecialtiesWrapper>
      <div className="top">
        <h3 className="col-2">Fanlar</h3>

        <Button
          class="col-2 btn btn-success btn-rounded"
          variant="contained"
          onClick={() => openModal()}
        >
          Fan qo`shish
        </Button>
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ minWidth: "35%" }} className="col">
              Fan nomi
            </th>
            <th style={{ minWidth: "35%" }} className="col">
              Fayllar soni
            </th>
            <th style={{ minWidth: "15%" }} className="col">
              Amallar
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            special.map((obj, index) => (
              <tr key={index}>
                <td style={{ minWidth: "35%" }} className="col">
                  {index + 1}. {obj.name}
                </td>
                <td style={{ minWidth: "35%" }} className="col">
                  {obj.fileStorage.length}
                </td>
                <td style={{ minWidth: "15%" }} className="col">
                  <div className="btns">
                    <IconButton onClick={() => handleEditFaculty(obj)}>
                      <EditSvg />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <MinLoader />
          )}
        </tbody>
      </table>
      <Drawer
        anchor={"right"}
        open={isOpenModal}
        onClose={() => {
          onCloseModal();
        }}
      >
        <AddSpecial onCloseModal={onCloseModal} />
      </Drawer>
      <Drawer
        anchor={"right"}
        open={isOpenModal2}
        onClose={() => {
          onCloseModal2();
        }}
      >
        <UpdateSpecial
          onCloseModal2={onCloseModal2}
          editSpecial={editSpecial}
        />
      </Drawer>
    </SpecialtiesWrapper>
  );
};

export default Science;

import React, { useEffect, useState } from "react";
import { StyledFiles } from "./style";
import ScienceProvider from "../../../../Data/ScienceProvider";
import { Button, Drawer, IconButton } from "@mui/material";
import AddFile from "./AddFile";
import DeleteSvg from "../../../Common/Svgs/DeleteSvg";

const FilesMain = () => {
  const [science, setScience] = useState([]);
  const [id, setId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    ScienceProvider.getAllScience()
      .then((res) => {
        console.log(res.data);
        setScience(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isOpenModal]);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleDeleteFile = (obj) => {
    console.log(obj);
  };

  return (
    <StyledFiles>
      <div className="top">
        <h3 className="col-2">Fayllar</h3>

        <Button
          class="col-2 btn btn-success btn-rounded"
          variant=""
          onClick={() => openModal()}
        >
          Fanga fayl biriktirish
        </Button>
      </div>
      <div className="wrap">
        <div className="left">
          {science.map((obj, index) => (
            <Button key={index} onClick={() => setId(obj.id)}>
              {obj.name}
            </Button>
          ))}
        </div>
        <div className="right">
          {id && (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th style={{ minWidth: "35%" }} className="col">
                    Fayl nomi
                  </th>

                  <th style={{ minWidth: "15%" }} className="col">
                    Amallar
                  </th>
                </tr>
              </thead>
              <tbody>
                {science
                  .filter((item) => item.id === id)[0]
                  ?.fileStorage.map((obj, index) => (
                    <tr key={index}>
                      <td style={{ minWidth: "35%" }} className="col">
                        {index + 1}.{obj.customName}
                      </td>
                      <td style={{ minWidth: "35%" }} className="col">
                        <IconButton onClick={() => handleDeleteFile(obj)}>
                          <DeleteSvg />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Drawer
        anchor={"right"}
        open={isOpenModal}
        onClose={() => {
          onCloseModal();
        }}
      >
        <AddFile onCloseModal={onCloseModal} />
      </Drawer>
    </StyledFiles>
  );
};

export default FilesMain;

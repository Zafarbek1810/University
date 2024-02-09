import React, { useEffect, useState } from 'react';
import SpecialtiesWrapper from '../Science/style';
import { Button, Drawer, IconButton } from '@mui/material';
import EditSvg from '../../../Common/Svgs/EditSvg';
import DeleteSvg from '../../../Common/Svgs/DeleteSvg';
import MinLoader from '../../../Common/MinLoader';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import StudentProvider from '../../../../Data/StudentProvider';
import { toast } from 'react-toastify';
import FileDollar from '../../../Common/Svgs/FileDollar';
import AddPayment from './AddPayment';

const Students = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState([]);
  const [render, setRender] = useState(null);
  const [editSpecial, setEditSpecial] = useState({});
  const [paymentObj, setPaymentObj] = useState({});
 

  useEffect(() => {
    setLoading(true);
    StudentProvider.getStudent()
      .then((res) => {
        console.log(res.data);
        setStudent(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isOpenModal, isOpenModal2, render]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };
  const onCloseModal2 = () => {
    setIsOpenModal2(false);
  };
  const onCloseModal3 = () => {
    setIsOpenModal3(false);
  };

  const handleEditStudent = (obj) => {
    console.log(obj);
    setIsOpenModal2(true);
    setEditSpecial(obj);
  };
  
  const handleDeleteStudent = (obj) => {
    StudentProvider.deleteStudent(obj.id)
    .then(res=>{
      console.log(res);
      setRender(Math.random());
      if(res.status===200){
        toast.success("Talaba muvaffaqiyatli o'chirildi")
      } else{
        toast.warning("Xatolik")
      }
    })
    .catch(err=>{
      console.log(err);
      toast.warning(res.data?.message)
    })
  };

  const handlePayment = (obj) => {
    console.log(obj);
    setPaymentObj(obj);
    setIsOpenModal3(true);
  };

    return (
        <SpecialtiesWrapper>
      <div className="top">
        <h3 className="col-2">Talabalar</h3>

        <Button
          class="col-2 btn btn-success btn-rounded"
          variant="contained"
          onClick={() => openModal()}
        >
          Talaba qo`shish
        </Button>
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ minWidth: "35%" }} className="col">
              Talaba ismi sharifi
            </th>
            <th style={{ minWidth: "35%" }} className="col">
              Username
            </th>
            <th style={{ minWidth: "15%" }} className="col">
              Amallar
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            student.map((obj, index) => (
              <tr key={index}>
                <td style={{ minWidth: "35%" }} className="col">
                  {index + 1}. {obj.first_name} {obj.last_name}
                </td>
                <td style={{ minWidth: "35%" }} className="col">
                  {obj.username}
                </td>
                <td style={{ minWidth: "15%" }} className="col">
                  <div className="btns">
                    <IconButton onClick={() => handleEditStudent(obj)}>
                      <EditSvg />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteStudent(obj)}>
                      <DeleteSvg />
                    </IconButton>
                    <IconButton onClick={() => handlePayment(obj)}>
                      <FileDollar />
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
        <AddStudent onCloseModal={onCloseModal} />
      </Drawer>
      <Drawer
        anchor={"right"}
        open={isOpenModal2}
        onClose={() => {
          onCloseModal2();
        }}
      >
        <UpdateStudent
          onCloseModal2={onCloseModal2}
          editStudent={editSpecial}
        />
      </Drawer>
      <Drawer
        anchor={"right"}
        open={isOpenModal3}
        onClose={() => {
          onCloseModal3();
        }}
      >
        <AddPayment
          onCloseModal3={onCloseModal3}
          paymentObj={paymentObj}
        />
      </Drawer>
    </SpecialtiesWrapper>
    );
};

export default Students;
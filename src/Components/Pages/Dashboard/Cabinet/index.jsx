import React, { useEffect, useState } from "react";
import { StyledWrapper } from "./style";
import StudentProvider from "../../../../Data/StudentProvider";
import getURlFile from "../../../../utils/getUrlFromFile";
import { Skeleton, Space } from "antd";

const Cabinet = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [loadImg, setLoadImg] = useState(false);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    setLoadData(true);
    StudentProvider.getStudentInfo()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadData(false);
      });
  }, []);

  useEffect(() => {
    setLoadImg(true);
    const fetchData = async () => {
      try {
        const res = await StudentProvider.imgPreview(data?.fileStorage?.hashId);
        const fileType = res.data.type.split("/")[1];
        const file = new File([res.data], `image.${fileType}`, {
          type: res.data.type,
        });

        setUrl(getURlFile(file));
        setLoadImg(false);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="left">
          <div className="img">
            {loadImg ? (
              <Space>
                <Skeleton.Image
                  active={loadImg}
                  style={{ borderRadius: "50%", width: 200, height: 200 }}
                />
              </Space>
            ) : (
              <img src={url} alt="" />
            )}
          </div>
          {loadData ? (
              <Skeleton active={loadData} />
          ) : (
            <h3>
              {data.first_name} <br /> {data.last_name}
            </h3>
          )}
        </div>
        <div className="right">
          <h2>Talaba ma&apos;lumotlari</h2>
          {loadData ? (
            <Skeleton active={loadData} />
          ) : (
            <>
              <div className="item">
                <label>Ism:</label>
                <p>{data.first_name}</p>
              </div>
              <div className="item">
                <label>Familyasi:</label>
                <p>{data.last_name}</p>
              </div>
              <div className="item">
                <label>Username:</label>
                <p>{data.username}</p>
              </div>
              <div className="item">
                <label>Universitet:</label>
                <p>{data?.fieldOfStudy?.faculty?.university?.name}</p>
              </div>
              <div className="item">
                <label>Fakultet:</label>
                <p>{data?.fieldOfStudy?.faculty?.name}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Cabinet;

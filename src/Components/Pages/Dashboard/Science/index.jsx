import React, { useEffect, useState } from "react";
import StudentProvider from "../../../../Data/StudentProvider";
import { Button, Image, Spin, Tabs } from "antd";
import {
  FilePdfOutlined,
  FileTextOutlined,
  FileImageOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { StyledWrapper } from "./style";

const Science = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
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

  return (
    <StyledWrapper>
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{
          height: 220,
        }}
        items={data?.fieldOfStudy?.sciences.map((item, index) => {
          return {
            label: `${item.name}`,
            key: index,
            children: <TabContent id={item.id} data={data} />,
          };
        })}
      />
    </StyledWrapper>
  );
};

const TabContent = ({ id, data }) => {
  const array = [];
  const [loading, setLoading] = useState(false);

  data?.fieldOfStudy?.sciences?.forEach((item) => {
    if (item.id === id) {
      array.push(item);
    }
  });

  const downloadFile = (hashId, name, ext) => {
    setLoading(true);
    StudentProvider.fileDownload(hashId)
      .then((res) => {
        console.log(res);
        const blob = new Blob([res.data], {
          type: `${res.data.contentType}`,
        });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${name}.${ext}`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="tabWrap">
      {array[0].fileStorage.map((v, i) => (
        <div key={i}>
            <Spin tip="Yuklanmoqda ..." spinning={loading}>
          <Button
            onClick={() => downloadFile(v.hashId, v.customName, v.extension)}
            className="downloadBtn"
          >
              {v.extension === "pdf" ? (
                <FilePdfOutlined />
              ) : v.extension === "txt" ? (
                <FileTextOutlined />
              ) : v.extension === "jpg" ||
                v.extension === "jpeg" ||
                v.extension === "png" ? (
                <FileImageOutlined />
              ) : v.extension === "mp4" ||
                v.extension === "MOV" ||
                v.extension === "avi" ? (
                <VideoCameraOutlined />
              ) : (
                ""
              )}
            <p>{v.customName}</p>
          </Button>
            </Spin>
        </div>
      ))}
    </div>
  );
};

export default Science;

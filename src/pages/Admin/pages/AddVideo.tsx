import { Button, Form, Spin, Upload, message } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import React, { useState, useRef } from "react";
import { BiPlus } from "react-icons/bi";
import Cloudinary from "../../../api/cloudinary";
import https from "../../../api/http";
import { filter } from "../utils/helper";
import { IUpload } from "./AddImage";

export interface IVideo extends IUpload {
  video?: string;
}

const AddVideos: React.FC = () => {
  const [video, setVideos] = useState<IVideo[]>([]);
  const [uploading, setUploading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const btnRef = useRef<any>(null);

  const handleUpload = async () => {
    setUploading(false);
    if (video.length < 1) return message.error("Select an videos");

    const uniqueArr = filter(video);

    try {
      const res = await https.post("/videos/new", uniqueArr);
      if (res.status === 201) {
        message.success("Videos saved successfully");
        setVideos([]);
        setFileList([]);
      }
    } catch (err) {
      message.error(`An error occurred: ${err}`);
      console.log(err);
    }
  };

  const remove = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const beforeUpload = async (file: any, x: any) => {
    setUploading((prev) => !prev);
    setFileList([...x]);
    for (let i = 0; i < x.length; i++) {
      // console.log(i);
      const formData = new FormData();
      formData.append(
        "upload_preset",
        `${process.env.REACT_APP_CLOUDINARY_PRESET}`
      );
      formData.append("file", x[i]);

      try {
        const res = await Cloudinary.post("/auto/upload", formData);
        const { secure_url, public_id, asset_id, existing } = res.data;

        setVideos((prev) => [
          ...prev,
          { video: secure_url, public_id, asset_id, existing },
        ]);
        message.success("Videos successfully uploaded");
      } catch (err: any) {
        message.error(err);
      }
      setUploading((prev) => !prev);
    }
    return false;
  };

  return (
    <Form onFinish={handleUpload} layout="horizontal">
      {/* <Form.Item valuePropName="fileList" getValueFromEvent={normFile}> */}
      <Upload
        onRemove={remove}
        beforeUpload={beforeUpload}
        multiple={true}
        fileList={fileList}
        listType="picture-card"
      >
        <div className="flex items-center justify-center flex-col">
          <BiPlus />
          <div style={{ marginTop: 8 }}>{uploading ? <Spin /> : null}</div>
        </div>
      </Upload>
      {/* </Form.Item> */}
      <Button
        disabled={video.length < 1 || uploading}
        onClick={() => btnRef.current.click()}
      >
        upload
      </Button>

      <button type="submit" ref={btnRef} className="hidden">
        submit
      </button>
    </Form>
  );
};

export default React.memo(AddVideos);

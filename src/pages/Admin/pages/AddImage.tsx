import { Button, Form, Spin, Upload, message } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import React, { useState, useRef } from "react";
import { BiPlus } from "react-icons/bi";
import Cloudinary from "../../../api/cloudinary";
import https from "../../../api/http";
import { filter } from "../utils/helper";

export interface IUpload {
  public_id: string;
  asset_id: string;
  existing?: boolean;
}

export interface Iimg extends IUpload {
  image: string;
}

const AddImage: React.FC = () => {
  const [image, setImage] = useState<Iimg[]>([]);
  const [uploading, setUploading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const btnRef = useRef<any>(null);

  const handleUpload = async () => {
    setUploading(false);
    if (image.length < 1) return message.error("Select an image");

    const uniqueArr = filter(image);
    try {
      const res = await https.post("/images/new", uniqueArr);
      if (res.status === 201) {
        message.success("Image saved successfully");
        setImage([]);
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
    setFileList([...x]);
    setUploading((prev) => !prev);
    for (let i = 0; i < x.length; i++) {
      // console.log(i);
      const formData = new FormData();
      formData.append(
        "upload_preset",
        `${process.env.REACT_APP_CLOUDINARY_PRESET}`
      );
      formData.append("file", x[i]);

      try {
        const res = await Cloudinary.post("/image/upload", formData);
        const { secure_url, public_id, asset_id, existing } = res.data;

        setImage((prev) => [
          ...prev,
          { image: secure_url, public_id, asset_id, existing },
        ]);
        message.success("Image successfully uploaded");
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
        disabled={image.length < 1 || uploading}
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

export default React.memo(AddImage);

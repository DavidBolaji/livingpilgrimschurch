import https from "../../../api/http";
import { useEffect } from "react";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";
import { Button, Spin, Table, message } from "antd";
import useImage, { Iimage } from "../hooks/useImage";
import { BiTrash } from "react-icons/bi";
import useFetch from "../../../hooks/useFetch";

const ViewVideo = () => {
  const { imagez, loading, total, currentPage, pageSize, fetchData } = useImage(
    1,
    20,
    "videos"
  );

  const { error, errorMessage, success, load, data, id, action } = useFetch();

  const onChange = async (pagination: Partial<TablePaginationConfig> | any) => {
    fetchData(pagination.current, pagination.pageSize);
  };

  const handleDelete = async (arg: any) => {
    action({
      request: https.post,
      path: `/videos/delete`,
      obj: {
        id: arg.id,
        public_id: arg.public_id,
      },
    });
  };
  useEffect(() => {
    if (error) {
      message.error(errorMessage);
    }
    if (success) {
      fetchData(1, 20);
      message.success("Video deleted successfully");
    }

    // return () => fetchData(1, 22);
    //eslint-disable-next-line
  }, [error, success, data]);

  const columns: ColumnsType<Iimage> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      className: "px-4 py-2",
      render: (text, record, index) => (
        <video width="120" height="60" controls>
          <source src={record.video} type="video/mp4" />
          <source src={record.video} type="video/ogg" />
        </video>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, obj) => (
        <Button
          className="bg-red-600 text-white hover:text-white hover:bg-white"
          style={{ backgroundColor: load && id === obj._id ? "#fff" : "" }}
          size="small"
          onClick={() =>
            handleDelete({ id: obj._id, public_id: obj.public_id })
          }
        >
          {load && id === obj._id ? <Spin /> : <BiTrash />}
        </Button>
      ),
    },
  ];

  const pagination = {
    current: currentPage,
    pageSize: pageSize,
    total: total,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30", "40", "50", "100", "200", "300"],
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={imagez}
        pagination={pagination}
        onChange={onChange}
        rowKey="_id"
        size="small"
        loading={loading}
        // scroll={{
        //   y: 240,
        // }}
      />
    </div>
  );
};

export default ViewVideo;

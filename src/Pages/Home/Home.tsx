import { Button, Space, Tag } from "antd";
import React from "react";

import TableUsers from "../../Components/Tables/CustomTable";
import { useAppDispatch, useAppSelector } from "../../Redux";
import { getUsersDispatch } from "../../Redux/Thunk/UsersThunk";


const Home = function () {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.data);

  React.useEffect(() => {
    dispatch(getUsersDispatch());
  }, [dispatch]);

  return (
    <div className="">
      <TableUsers
        data={users}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
          },
          {
            title: "Website",
            dataIndex: "website",
            key: "website",
          },
          {
            title: "Action",
            key: "action",
            render: (_: any, record) => {
              return (
                <Space size="middle">
                  <Button>{record.username}</Button>
                  <Button>delete</Button>
                </Space>
              );
            },
          },
        ]}
      />
      <code>{JSON.stringify(users)}</code>
    </div>
  );
};
export default Home;

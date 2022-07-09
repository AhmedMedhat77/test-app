import { Button, Space, Tag } from "antd";
import { AxiosError } from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { ThaseelAPIWrapper } from "../../Api/tahseelApi";

import TableUsers from "../../Components/Tables/CustomTable";
import { useAppDispatch, useAppSelector } from "../../Redux";
import { getUsersDispatch } from "../../Redux/Thunk/UsersThunk";
const tahseelApi = ThaseelAPIWrapper({
  headers: {
    "Content-Type": "text/html; charset=UTF-8",
  },
});
const Home = function () {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.data);

  React.useEffect(() => {
    // tahseelApi
    //   .login("ahmedmedhat", "123456")
    //   .then((r) => {
    //     console.log(r.data);
    //   })
    //   .catch((err: AxiosError) => console.error(err.message));

    dispatch(getUsersDispatch());
  }, [dispatch]);

  return (
    <div className="">
      <Link to="/todo">Todo</Link>
      <Link to="/todoredux">TodoRedux</Link>
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

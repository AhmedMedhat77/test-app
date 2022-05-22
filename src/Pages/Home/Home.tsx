import React from "react";

import TableUsers from "../../Components/Tables/TableUsers";
import { useAppDispatch, useAppSelector } from "../../Redux";
import { getUsersDispatch } from "../../Redux/Thunk/UsersThunk";

const Home = function () {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.data);

  React.useEffect(() => {
    dispatch(getUsersDispatch());
  }, []);

  return (
    <div className="">
      <TableUsers />
      <code>{JSON.stringify(users)}</code>
    </div>
  );
};
export default Home;

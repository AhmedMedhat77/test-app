import { createAsyncThunk } from "@reduxjs/toolkit";
import { JsonPlaceholderAPIWrapper } from "../../Api/placeholderApi";
import { setUsers } from "../Slices/UsersSlice";


const jsonPlaceholderApi = JsonPlaceholderAPIWrapper({
  timeout: 6000,
});

export const getUsersDispatch = createAsyncThunk(
  "json/user",
  async function (_, { dispatch }) {
    jsonPlaceholderApi
      .getUsers()
      .then((response) => {
        if (!response || response.status !== 200) {
          console.error("error getting json/user");
          return;
        }
        dispatch(setUsers(response.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

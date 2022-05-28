import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserTypes } from "../../ActionTypes";
import { JsonPlaceholderAPIWrapper } from "../../Api/placeholderApi";
import { setUsers } from "../Slices/UsersSlice";

const jsonPlaceholderApi = JsonPlaceholderAPIWrapper({
  timeout: 6000,
});

export const getUsersDispatch = createAsyncThunk(
  UserTypes.GET_USER,
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

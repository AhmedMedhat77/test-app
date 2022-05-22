import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [] as any[],
};

const UsersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsers: function (state, action) {
      return { ...state, data:action.payload };
    },
  },
});

export const { setUsers } = UsersSlice.actions;

export default UsersSlice;

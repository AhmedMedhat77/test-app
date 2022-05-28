import { createSlice } from "@reduxjs/toolkit";
import { ActionTypes } from "../../ActionTypes";

type LoadingState = {
  [key in ActionTypes]: {
    stats: "loading" | "fail" | "success" | "none";
  };
};
const initialState: Partial<LoadingState> = {};

const LoadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading: function (state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice;

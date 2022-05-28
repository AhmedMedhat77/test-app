import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoTypes } from "../../ActionTypes";
import { TodoAPIWrapper } from "../../Api/todoApi";
import { setTodo } from "../Slices/TodoSlice";

const todoAPI = TodoAPIWrapper({});

export const getTodoDispatch = createAsyncThunk(
  TodoTypes.GET_TODO,
  async function (_, { dispatch }) {
    todoAPI
      .getTodo()
      .then((res) => {
        dispatch(
          setTodo({
            data: res as any,
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

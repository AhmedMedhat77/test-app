import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface TodoState{
    data: any[];
}

const initialState:TodoState = {
  data: [],
};



const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setTodo: function (state, action: PayloadAction<Partial<TodoState>>  ) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTodo } = TodoSlice.actions;

export default TodoSlice;

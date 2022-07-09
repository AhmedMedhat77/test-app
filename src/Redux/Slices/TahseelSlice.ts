import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface TahseelState{
    data: any[];
}

const initialState:TahseelState = {
  data: [],
};



const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setTodo: function (state, action: PayloadAction<Partial<TahseelState>>  ) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTodo } = TodoSlice.actions;

export default TodoSlice;

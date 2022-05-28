import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import LoadingSlice from "./Slices/LoadingSlice";
import TodoSlice from "./Slices/TodoSlice";
import UsersSlice from "./Slices/UsersSlice";

const rootReducer = combineReducers({
  user: UsersSlice.reducer,
  loading: LoadingSlice.reducer,
  todo: TodoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppSelector, useAppDispatch };

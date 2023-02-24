import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/addtask/addtaskSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

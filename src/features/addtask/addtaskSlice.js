import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  { id: 0, title: "Project1", description: "first project", isDone: true },
  { id: 1, title: "Project2", description: "second project", isDone: false },
];
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskadded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            description: "",
            isDone: false,
          },
        };
      },
    },
    updateatask: {
      reducer(state, action) {
        return state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      },
      prepare(taskUpdated) {
        return {
          payload: taskUpdated,
        };
      },
    },
  },
});
export const selectAllTasks = (state) => state.tasks;

export default tasksSlice.reducer;
export const { taskadded, updateatask } = tasksSlice.actions;

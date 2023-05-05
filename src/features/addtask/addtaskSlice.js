import { createSlice, nanoid } from "@reduxjs/toolkit";
let initialState = [
  { id: 0, title: "Create website wireframes", description: "Sketch out website layout and user flow", isDone: false },
  { id: 1, title: "Design website mockups", description: "Create detailed designs of website pages", isDone: false },
  { id: 2, title: "Write blog post", description: "Research and write a blog post on a relevant topic", isDone: true },
  { id: 3, title: "Conduct user interviews", description: "Schedule and conduct interviews with target users", isDone: false },
  { id: 4, title: "Create social media strategy", description: "Develop plan for social media presence and content creation", isDone: false }
];
if (!localStorage.getItem("toDoList")){
  localStorage.setItem("toDoList",JSON.stringify(initialState));
}else{
initialState=JSON.parse(localStorage.getItem('toDoList'));
}
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskadded: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem("toDoList",JSON.stringify(state))
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
        state= state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        localStorage.setItem("toDoList",JSON.stringify(state))
        return state
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

import React from "react";
import ListTask from "./ListTask";
import "../index.css";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../features/addtask/addtaskSlice";
export default function Home() {
  const tasks = useSelector(selectAllTasks);
  // console.log(tasks);
  return (
    <>
      {" "}
      <article className="main">
        <ListTask list={tasks} />
      </article>
    </>
  );
}

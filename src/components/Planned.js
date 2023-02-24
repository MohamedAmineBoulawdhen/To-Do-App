import React from "react";
import ListTask from "./ListTask";
import "../index.css";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../features/addtask/addtaskSlice";

export default function Planned() {
  const tasks = useSelector(selectAllTasks);
  // console.log(initTasks.filter((item) => item.isDone === false));
  return (
    <>
      <article className="main">
        <ListTask list={tasks.filter((item) => item.isDone === false)} />
      </article>
    </>
  );
}

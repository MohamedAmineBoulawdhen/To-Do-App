import React from "react";
import ListTask from "./ListTask";
import "../index.css";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../features/addtask/addtaskSlice";

export default function Completed() {
  const tasks = useSelector(selectAllTasks);
  return (
    <>
      <article className="main">
        <ListTask list={tasks.filter((item) => item.isDone === true)} />
      </article>
    </>
  );
}

import React from "react";
import Task from "./Task";

export default function ListTask({ list }) {
  // console.log(list);
  const listOftasks = list.map((item) => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      isDone={item.isDone}
    />
  ));
  return <div>{listOftasks}</div>;
}

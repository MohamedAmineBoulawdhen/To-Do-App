import React, { useState} from "react";
import "../index.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../features/addtask/addtaskSlice";
import { AiOutlineForm } from "react-icons/ai";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { updateatask } from "../features/addtask/addtaskSlice";

export default function Task({ id, title, description }) {
  const task = useSelector(selectAllTasks).find((item) => item.id === id);
  console.log(task);
  let isDone = task.isDone;
  const dispatch = useDispatch();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const toggleFormIsOpen = () => setFormIsOpen(!formIsOpen);
  const UpdateIsDone = () => {
    isDone = !isDone;
    let Updatedrask = { ...task, isDone };
    dispatch(updateatask(Updatedrask));
  };
  return (
    <div id="task">
      {formIsOpen ? (
        <EditTask id={id} toggleFormIsOpen={toggleFormIsOpen} />
      ) : (
        <>
          <h1>
            <button
              id="edittodobutton"
              onClick={() => {
                setFormIsOpen(true);
              }}
            >
              <AiOutlineForm id="edittodobuttonicon" />
            </button>
            <button id="isdonebutton" onClick={UpdateIsDone}>
              {isDone ? (
                <IoMdCheckbox className="isdonebuttonicon" />
              ) : (
                <MdCheckBoxOutlineBlank className="isdonebuttonicon" />
              )}
            </button>
            {title}
          </h1>
          <div id="taskdescription">
            <strong>Description: </strong>
            {description ? (
              description
            ) : (
              <div style={{ color: "coral", fontSize: "1.5rem" }}>
                <center>
                  Press the edit button{" "}
                  <AiOutlineForm
                    id="edittodobuttonicon"
                    style={{ fontSize: "1.5rem", margin: "0px 5px" }}
                  />
                  above to add a description.{" "}
                </center>
              </div>
            )}{" "}
          </div>
        </>
      )}
    </div>
  );
}

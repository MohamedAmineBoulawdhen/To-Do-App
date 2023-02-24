import React, { useRef, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineAddTask } from "react-icons/md";
import "../index.css";
import { taskadded } from "../features/addtask/addtaskSlice";
import { useDispatch } from "react-redux";
export default function Addtask() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const ref = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFormIsOpen(false);
      }
    }; 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleTextInput = (e) => {
    // console.log(textInput);
    e.preventDefault();
    dispatch(taskadded(title));
    setTitle("");
  };

  return (
    <div className="addtask" ref={ref}>
      {!formIsOpen && (
        <div
          onClick={() => {
            setFormIsOpen(!formIsOpen);
            // console.log(formIsOpen);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          {!title && <span>Add a task</span>}
          {title && <span>{title}</span>}
        </div>
      )}
      {formIsOpen && (
        <div id="formaddatask">
          <form onSubmit={handleTextInput}>
            <input
              type="text"
              id="formaddataskinput"
              autoFocus="autofocus"
              placeholder="Try typing 'Pay utilities bill by Friday 6pm'"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              minLength="3"
              required
            />
            <button id="addtaskbutton">
              <MdOutlineAddTask id="addtaskbuttonicon" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

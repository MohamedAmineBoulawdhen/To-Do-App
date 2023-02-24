import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../features/addtask/addtaskSlice";
import { updateatask } from "../features/addtask/addtaskSlice";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "../index.css";
export default function EditTask({ id, toggleFormIsOpen }) {
  const task = useSelector(selectAllTasks).filter((task) => task.id === id)[0];
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(ref.current, ref.current.contains(event.target));
      if (ref.current && !ref.current.contains(event.target)) {
        toggleFormIsOpen();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, toggleFormIsOpen]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskUpdated = { ...task, title, description };
    dispatch(updateatask(taskUpdated));
    // console.log(taskUpdated);
    toggleFormIsOpen();
    setTitle("");
    setDescription("");
  };
  const handleCancel = (e) => {
    toggleFormIsOpen();
  };
  return (
    <div id="edittask" ref={ref}>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Title</Form.Label>
            <Form.Control
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              min="3"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              value={description}
              min="3"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "15px" }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </fieldset>
      </Form>
    </div>
  );
}

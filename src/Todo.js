import { Button, Input, List, ListItem, ListItemText, makeStyles, Modal } from "@material-ui/core";
import { db } from "./Firebase";
import React, { useState } from "react";
import "./todo.css";

// Css for Modal
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "220px",
    left: "25%",
    margin: "auto",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid $000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set({ todo: input }, { merge: true });
    setOpen(false);
  };

  return (
    <>
      {/* creating a Modal */}
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a Modal</h1>
          <Input placeholder={props.todo.todo} value={input} onChange={(event) => setInput(event.target.value)} />
          <Button onClick={updateTodo} variant="contained" color="secondary">
            Update
          </Button>
        </div>
      </Modal>
      {/* Our Todo list item */}
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} />
          <Button onClick={(e) => setOpen(true)} variant="contained" color="primary">
            Edit
          </Button>
          <Button onClick={(event) => db.collection("todos").doc(props.todo.id).delete()} variant="contained" color="secondary">
            Delete Me
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default Todo;

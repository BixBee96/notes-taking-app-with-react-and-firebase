import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./App.css";
import { db } from "./Firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([""]);
  const [input, setInput] = useState("");

  // Receiving data from App and database and appending
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
      });
  }, []);

  // Receiving data from App and appending to database on timestamp desc order.
  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello World 🚀🔥🔥🔥</h1>
      {/* Input Form  */}
      <FormControl>
        <InputLabel>✅ Add Todo to list</InputLabel>
        <Input value={input} onChange={(event) => setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>

      {/* Render Todo list items */}
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

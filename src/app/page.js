"use client";
import { useState } from "react";
import styles from "./page.module.css";
// {
//   todo: "learn react",
//   isCompleted: false,
// }

//string array
const todos = ["learn react", "learn nodejs"];
//object array
const todos1 = [
  {
    todo: "learn react",
    isCompleted: false,
  },
  {
    todos: "learn nodejs",
    isCompleted: false,
  },
  {
    todos: "learn nodejs 123",
    isCompleted: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
  };

  const toggleIsCompleted = (incomingTodo) => {
    let changedTodos = todos.map((t) => {
      if (t.todo === incomingTodo.todo) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(changedTodos);
  };

  return (
    <div className={styles[`todo-body`]}>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["bg-blue"]}`}>
          <input
            className={styles.addTask}
            type="text"
            placeholder="Add a new task"
            onChange={(e) =>
              setNewTodo({
                todo: e.target.value,
                isCompleted: false,
              })
            }
          />
          <button className={styles.addButton} onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className={`${styles.filterButtonsCont} ${styles.filterButtons}`}>
          <button
            className={activeFilter == "all" && styles.activeStyle}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={activeFilter == "active" && styles.activeStyle}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </button>
          <button
            className={activeFilter == "completed" && styles.activeStyle}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div className={styles.taskContainer}>
          {todos.map((todo, index) => {
            return (
              <div className={styles.tasklist}>
                <div className={styles.flex} key={index}>
                  <input
                    className={styles.checkBox}
                    type="checkbox"
                    onClick={() => toggleIsCompleted(todo)}
                    checked={todo.isCompleted}
                  />
                  <p className={todo.isCompleted ? styles.completed : ""}>
                    {todo.todo}
                  </p>
                </div>
                <button className={styles.delButton}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

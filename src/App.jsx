import { useState, useEffect } from "react";
import './App.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([{ text: input, completed: false }, ...todos]); // เพิ่มใหม่ที่ด้านบน
    }
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4 w-100 md:w-200 bg-yellow-400 shadow-md rounded-lg">
      <h1 className="text-xl font-bold text-rose-800 mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" p-2 flex-1 bg-emerald-600 text-white"
          placeholder="Add a new task"
        />
        <button onClick={addTodo} className="text-green-500 p-2 ml-2">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center p-2 border-b"
          >
            <div className="flex-shrink-0 w-6 h-6">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              className=" accent-green-500 w-4 h-4 md:w-6 md:h-6"
            />
            </div>
            <span className={`flex-grow ${todo.completed ? "line-through text-yellow-700" : ""}`}>
              {todo.text}
            </span>
            <div className="flex-shrink-0">
              <button
                onClick={() => editTodo(index)}
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
    {
      description: "Get in shape",
      title: "Gym!",
    },
    {
      description: "Eat salads",
      title: "Eat Healthy!",
    },
  ]);

  return (
    <div>
      <button
        onClick={() => {
          setTodos([
            ...todos,
            { title: "new title", description: "New description" },
          ]);
        }}
      >
        Add todo {todos.length}
      </button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.title}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default App;
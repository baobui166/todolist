import { useStore, action } from "./store";
import { useRef } from "react";

function App() {
  const { state, dispatch } = useStore();
  const { todos, todoInput } = state;
  const refInput = useRef();
  console.log(todoInput, todos);

  function handlSubmit() {
    dispatch(action.addTodoInput(todoInput));
    dispatch(action.setTodoInput(""));
    refInput.current.focus();
  }

  return (
    <>
      <div>
        <input
          ref={refInput}
          value={todoInput}
          placeholder="Inter todo"
          onChange={(e) => dispatch(action.setTodoInput(e.target.value))}
        ></input>

        <button onClick={handlSubmit}>Them</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

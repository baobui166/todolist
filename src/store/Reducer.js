import { SET_TODO_INPUT, ADD_TODO_INPUT } from "./constain";

const initialState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    //...
    case SET_TODO_INPUT:
      return { ...state, todoInput: action.payload };

    case ADD_TODO_INPUT:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      throw new Error("Invalid ation");
  }
}

export { initialState };
export default reducer;

import { SET_TODO_INPUT, ADD_TODO_INPUT } from "./constain";

export const setTodoInput = (payload) => {
  return { type: SET_TODO_INPUT, payload };
};

export const addTodoInput = (payload) => {
  return { type: ADD_TODO_INPUT, payload };
};

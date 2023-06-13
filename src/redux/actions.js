import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "./actionsTypes";

let newTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++newTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const filterTodo = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

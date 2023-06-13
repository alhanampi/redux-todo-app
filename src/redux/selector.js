import { TODOS_FILTER } from "../utils/contants";

export const getTodosByFilter = (store, filter) => {
  switch (filter) {
    case TODOS_FILTER.COMPLETED: {
      return store.todos.filter((todo) => todo.completed);
    }
    case TODOS_FILTER.PENDING: {
      return store.todos.filter((todo) => !todo.completed);
    }
    default: {
      return store.todos;
    }
  }
};

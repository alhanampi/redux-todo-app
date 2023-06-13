import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actionsTypes";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      //los saco del todo nuevo que mando por actionTypes:
      const { id, content } = action.payload;
      const newTodo = { content, completed: false, id };
      const updatedTodos = [...state.todos, newTodo];

      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return {
        todos: updatedTodos,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return {
        todos: updatedTodos,
      };
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);

      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return {
        todos: updatedTodos,
      };
    }

    default: {
      return state;
    }
  }
};

export default todosReducer;

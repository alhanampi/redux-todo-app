import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodosByFilter } from "../redux/selector";

const TodoList = () => {
  const { todos, visibilityFilter } = useSelector((state) => state);
  const filterTodos = getTodosByFilter(todos, visibilityFilter);

  return (
    <Box my={5}>
      {filterTodos.length ? (
        filterTodos.map((t) => <Todo key={`todo-${t.id}`} todo={t} />)
      ) : (
        <Box textAlign="center" my="4">
          No todos yet!
        </Box>
      )}
    </Box>
  );
};

export default TodoList;

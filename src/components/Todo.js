import {
  Box,
  Checkbox,
  CloseButton,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  return (
    <Box 
    mb={1}
    bgColor={todo.completed ? "green.100" : "lightgoldenrodyellow"}
    p={2}
    >
      <Flex>
        <Checkbox
          colorScheme="teal"
          isChecked={checked}
          onChange={handleChecked}
        >
          <Text as={todo.completed && "del"} flex="4">
            {todo.content}
          </Text>
        </Checkbox>
        <Spacer />
        <IconButton
          icon={<CloseButton />}
          colorScheme={todo.completed ? "green" : "yellow"}
          onClick={handleDelete}
        />
      </Flex>
    </Box>
  );
};

export default Todo;

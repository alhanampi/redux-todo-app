import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value))
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type="text"
            onChange={handleInput}
            value={value}
            placeholder="here goes your new task!"
            borderTopRadius={0}
            borderBottomEndRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          type="submit"
          isDisabled={value === ""}
          borderTopLeftRadius={0}
          borderBottomStartRadius={0}
        >
          Add new task
        </Button>
      </Flex>
    </form>
  );
};

export default AddTodo;

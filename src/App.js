import { Container, Heading } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <Container maxWidth="container.sm">
      <Heading my="4">Todo app</Heading>
      <AddTodo />
      <TodoFilter />
      <TodoList />
    </Container>
  );
}

export default App;

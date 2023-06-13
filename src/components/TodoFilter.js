import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import { TODOS_FILTER } from "../utils/contants";
import { useDispatch } from "react-redux";
import { filterTodo } from "../redux/actions";

const TodoFilter = () => {
  const dispatch = useDispatch();

  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(TODOS_FILTER).map((todos) => {
            const chosenFilter = TODOS_FILTER[todos];
            return (
              <Tab
                key={todos}
                onClick={() => dispatch(filterTodo(chosenFilter))}
              >
                {chosenFilter}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default TodoFilter;

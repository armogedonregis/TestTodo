import styled from "styled-components";
import { Item } from "../item";
import { useTasks } from "../todoContext";

// Список всех тодо

const Container = styled.div`
`;

export const List: React.FC = () => {

  const {todo} = useTasks();
  
  return (
    <Container>
      {todo.todos.map(item => {
        return (
          <Item key={item.id} {...item} />
        )
      })}
    </Container>
  );
};

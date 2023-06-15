import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import { Container, Title } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ taskColumnTitle, category }) => {
  return (
    <Container>
      <Title>{taskColumnTitle}</Title>
      <AddTaskBtn columnHeadBtn category={category} />
    </Container>
  );
};

export default ColumnHeadBar;

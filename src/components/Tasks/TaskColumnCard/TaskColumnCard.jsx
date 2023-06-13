import TaskToolbar from '../TaskToolbar/TaskToolbar';
import TaskModal from '../TaskModal/TaskModal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from '../../../API/userSlice';
import {
  Item,
  Title,
  Container,
  ContainerInfo,
  ContainerUser,
  Priority,
  Img,
} from './TaskColumnCard.styled';

// import Icon from "utils/Icon/Icon";

const TaskColumnCard = ({
  category,
  title,
  priority,
  id,
  task,
  firstLetter,
}) => {
  const { avatarUrl } = useSelector(getUserInfo);

  useEffect(() => {}, [avatarUrl]);

  let componentStyle;

  switch (priority) {
    case 'low':
      componentStyle = { backgroundColor: '#72C2F8' };
      break;

    case 'medium':
      componentStyle = { backgroundColor: '#F3B249;' };
      break;

    case 'high':
      componentStyle = { backgroundColor: '#EA3D65' };
      break;

    default:
      break;
  }

  return (
    <Item>
      <Title>{title}</Title>
      <Container>
        <ContainerInfo>
          <ContainerUser>
            {avatarUrl ? (
              <Img src={avatarUrl} alt="user_photo" />
            ) : (
              { firstLetter }
            )}
            {/* <Icon name="icon-ph_user" width="32" height="32" /> */}
          </ContainerUser>
          <Priority backgroundColor={componentStyle.backgroundColor}>
            {priority}
          </Priority>
        </ContainerInfo>
        <TaskToolbar id={id} category={category} />
      </Container>
      <TaskModal />
    </Item>
  );
};

export default TaskColumnCard;

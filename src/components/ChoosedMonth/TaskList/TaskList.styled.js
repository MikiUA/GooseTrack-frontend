import styled from 'styled-components';

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: ${props => (props.manyTasks ? 'row' : 'column')};
  flex-wrap: ${props => (props.manyTasks ? 'wrap' : 'nowrap')};
  align-content: center;
  justify-content: center;
  & > li {
    width: ${props => (props.manyTasks ? '16px' : 'auto')};
    height: ${props => (props.manyTasks ? 'fit-content;' : 'auto')};
  }
  height: 100%;
  margin: 0;
  padding-left: 2px;
  padding-right: 2px;
  overflow: hidden;

  // @media screen and (min-width: 375px) {
  //   margin-top: 8px;
  //   margin-right: 4px;
  //   font-size: 12px;
  //   line-height: 1.17;
  // }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
    padding-right: 4px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const TaskItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 3px 4px 3px 10px;
  ${props => {
    switch (props.priority) {
      case 'low':
        return 'color: #3E85F3; background-color: #CEEEFD;';
      case 'medium':
        return 'color: #F3B249; background-color: #FCF0D4;';
      case 'high':
        return 'color: #EA3D65; background-color: #FFD2DD;';
      default:
        return;
    }
  }}
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    padding: 4px 6px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (min-width: 1440px) {
    padding: 4px 10px;
  }
`;

import styled from 'styled-components';

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: ${props => (props.manyTasks ? 'row' : 'column')};
  flex-wrap: ${props => (props.manyTasks ? 'wrap' : 'nowrap')};
  align-items: center;
  justify-content: center;
  align-content: center;
  padding-left: 2px;
  padding-right: 2px;
  height: 100vh;
  margin-top: 2px;
  margin-bottom: 2px;

  // overflow: hidden;

  @media screen and (max-width: 374px) {
    margin-top: 4px;
    margin-right: 2px;
    font-size: 10px;
    line-height: 1.17;
  }
  @media screen and (min-width: 375px) {
    // margin-top: 8px;
    // margin-right: 4px;
    font-size: 12px;
    line-height: 1.17;
  }
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
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${props => (props.manyTasks ? '0' : '3px 4px 3px 10px')};
  border-radius: 8px;
  width: ${props => (props.manyTasks ? '14px' : '44px')};
  height: ${props => (props.manyTasks ? '14px;' : 'auto')};
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
  }};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${props => (props.manyTasks ? '0' : '10px')};
  line-height: 1.4;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    width: ${props => (props.manyTasks ? '30px' : '92px')};
    height: auto;
    padding: 4px 6px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (min-width: 1440px) {
    width: ${props => (props.manyTasks ? '44px' : '140px')};
    padding: 4px 10px;
  }
`;

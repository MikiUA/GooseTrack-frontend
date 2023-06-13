import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';

export const StyledFeedbacksBox = styled.div`
  overflow-y: auto;
  max-height: 200px;

  background: rgba(227, 243, 255, 0.5);
  border-radius: 8px;
`;

export const StyledFeedbacksList = styled.ul`
  display: flex;
  margin: 0;
  flex-direction: column;
  list-style-type: none;
  padding: 14px;
`;

export const StyledFeedbacksItem = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;

  :not(:first-child) {
    margin-top: 14px;

    @media screen and (min-width: 768px) {
      margin-top: 20px;
    }
  }
`;

export const StyledFeedbacksAvatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    display: block;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

export const StyledFeedbacksUsername = styled.h4`
  display: block;
  margin-top: 0;
  margin-bottom: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: #343434;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const StyledFeedbacksRating = styled(Icon)`

    width: 14px;
    height: 14px;
    use
    margin-right: 6px;


  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const StyledFeedbacksHeader = styled.div`
  display: flex;
`;

export const StyledFeedbacksText = styled.p`
  margin-top: 12px;
  margin-bottom: 0;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33px;

  color: rgba(17, 17, 17, 0.7);

  @media screen and (min-width: 768px) {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29px;
    /* or 129% */

    color: rgba(17, 17, 17, 0.7);
  }
`;

export const StyledFeedbacksButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
`;

export const StyledFeedbackButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  :first-child {
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const StyledButtonIcon = styled(Icon)`
  stroke: #111;
  transition: linear 0.3s;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

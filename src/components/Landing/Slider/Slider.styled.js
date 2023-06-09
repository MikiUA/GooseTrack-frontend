import styled from '@emotion/styled';
import Icon from '../../../utils/Icon/Icon';

export const SliderTitle = styled.h3`
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  text-transform: uppercase;
  color: #3e85f3;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledSlider = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 64px;
`;

export const SliderList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;
  overflow: hidden;

  @media (min-width: 1440px) {
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: ${({ dataLength }) => (dataLength % 2 === 0 ? '32px' : '0')};
  }  
`;

export const SliderItem = styled.li`
  box-sizing: border-box;
  padding: 24px;
  width: 100%;
  max-width: 335px;
  height: 194px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  overflow: auto;
  display: ${({ index, currentSlide }) =>
    index === currentSlide ? 'block' : 'none'};
  // transform: scale(${({ isArrowClicked }) => (isArrowClicked ? '1.1' : '1')}); 
  transition: all 0.3s ease-in;

  
  @media (min-width: 768px) {
    max-width: 580px;
    height: 187px;
  }

  @media (min-width: 1440px) {
    width: calc((100% - 124px) / 2);
    max-width: none;
    height: 187px;
    display: ${({ index, currentSlide, dataLength }) =>
      (index === currentSlide || index === currentSlide + 1) &&
      (index !== dataLength - 1 || dataLength % 2 === 0)
        ? 'block'
        : 'none'};
  }
`;

export const SliderHeaderUser = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
`;

export const SliderUserPhoto = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const HeaderUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 447px;
  }
`;

export const SliderUserTitle = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #343434;
  margin: 0;
  margin-bottom: 13px;
  padding: 0;
`;

export const SliderUserDescr = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
`;

export const SliderContainer = styled.div`
  margin: 0 auto;
  padding-inline: 20px;

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 128px;
  }
`;

export const SliderUserRating = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconArrow = styled(Icon)`
  width: 70px;
  height: 16px;  
  background-color: transparent;  
  align-items: center;
  justify-content: center;  
  display: flex;
  fill: #3e85f3;
  
  `;

export const BtnArrow = styled.button`  
  border: transparent;
  border-radius: 44px;
  padding: 5px 12px;
  background-color: #dcebf7;   
  outline: transparent; 
  box-shadow: 0px 4px 4px rgba(0,0,0,.15);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);  
  cursor: pointer;

  &:hover, 
  &:focus {
    border: 1px solid #3e85f3;
    
} 

`;

export const SliderArWrap = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
  margin-top: 20px;  
`;

export const TextDiv = styled.div`
`
import styled from '@emotion/styled';

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
  color: #3E85F3;
  
  @media screen and (min-width: 768px) {
    
font-size: 40px;
line-height: 1.1;
   }
`;

export const StyledSlider = styled.section`
   /* height: 100vh;  */
  display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #FFFFFF;   
   margin-bottom: 64px;  
   `

export const SliderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;   

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 124px;
    margin-bottom: 32px;
  }
`
export const SliderItem = styled.li`
  box-sizing: border-box;
  padding: 24px;
  max-width: 335px;
  height: 194px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  overflow: hidden;

  ${({ additionalClass }) =>
    additionalClass &&
    `
      display: none;
    `}

  @media (min-width: 768px) {
    max-width: 580px;
    height: 187px;
  }

  @media (min-width: 1440px) {
   display: initial;
  }
  `

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

export const SliderUserRating = styled.div`
  display: flex;
  gap: 10px;
`;


export const SliderUserDescr = styled.p`
  margin: 0;
  padding: 0;
  width: 287px;
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.29;
color: rgba(17, 17, 17, 0.7);

@media (min-width: 768px) {
  width: 447px;
  }
`;


export const SliderArWrap = styled.div`
 display: flex;
  gap: 25px;
  margin-top: 20px;

  @media (min-width: 768px) {
  
  }
`

export const ArLeft = styled.span`
color: tomato;
`
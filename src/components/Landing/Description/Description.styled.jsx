import styled from '@emotion/styled';

export const StyledImg = styled.div`
    display: flex;
   flex-direction: column;
   `
  
export const StyledList = styled.ul`
list-style: none;
padding: 0px;
margin: 0px;

`

export const StyledItem = styled.li`
margin-bottom: 64px;


@media screen and (min-width: 768px) {
  display: flex;
flex-direction: column;
}

@media screen and (min-width: 1440px) {
display: flex;
gap: 300px;
justify-content: center;
align-items: center;
flex-direction: row;


&.sidebarItem {  
  flex-direction: row-reverse;
}
}
`

export const WrapItemText = styled.div`

@media screen and (min-width: 768px) {
  &.sidebarWrapText {
margin-left: auto;
   }  
}
   
  @media screen and (min-width: 1440px) {
  flex-direction: column;
  margin-left: 0px; 
  
  }
  `
  
  export const StyledNumberTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  color: #3E85F3;
  margin: 0px;
  padding: 0px;
  
  @media screen and (min-width: 768px) {
     width: 74px;
     height: 104px;
     font-size: 104px;
  }
  `
  export const StyledBtnDescr = styled.button`
     width:214px;
     height: 56px;
     padding: 8px 18px;
     border: none;
     background: #DCEBF7;
     border-radius: 44px;  
     margin-top: 14px;
     margin-bottom: 8px;
     
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.25;
    text-transform: uppercase;
    color: #3E85F3;
  
  @media screen and (min-width: 768px) {
    width: 264px;
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;  
  }
  `
  
  export const StyledSubtitle = styled.h3`
  padding: 0px;
  margin: 0px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  color: #171820;

  &.sidebarSub {
margin-top: 14px;
  }  
  
  @media screen and (min-width: 768px) {
     font-size: 40px;
     line-height: 1.1;
  }  
  `
  export const StyledText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.9);
  margin-top: 14px;
  margin-bottom: 40px;
  
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 48px;
     }
  
     @media screen and (min-width: 768px) {
      width: 275px;    
     }
  `
  
  export const StyledPictureDescr = styled.picture`
     width: 335px;
     flex-grow: 0;
  
     @media screen and (min-width: 768px) {
       width: 704px;
       
       &.sidebarImg {
         margin-left: auto;
      } 
     }
  
     @media screen and (min-width: 1440px) {
       width: 604px;
     }
   `; 
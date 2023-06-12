import { Typography, styled, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Icon from '../../utils/Icon/Icon';
export const StyledContainer = styled(Box)`
  display: ${props => (props.data ? 'flex' : 'none')};
  width: 60vw;
  height: 100vh;
  position: fixed;
  z-index: 5555555;
  margin: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 38vw;
    padding: 24px 32px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 20vw;
    padding: 32px 24px;
  }
`;

export const StyledBox = styled(Box)`
  z-index: 5555555;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const StyledHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 64px;
 
  }
`;

export const StyleHeagerText = styled(Typography)`
margin-left: 6px;
 font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.375;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
   

`;

export const StyledPicture = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1440px) {
    width: 71px;
    margin-right: 10px;
  }
`;

export const StyledButtonClose = styled(Button)`
  opacity: 1;
  width: 24px;
  height: 24px;
  margin-left: 39px;
  padding: 0;
  color: rgba(132, 130, 138, 1);
  background-color: transparent;
  &:hover,
  &:focus {
    color: rgba(62, 133, 243, 1);
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    margin-left: 36px;
    width: 36px;
    height: 36px;
    margin-left: 36px;
  }
  @media screen and (min-width: 1440px) {
    width: 20vw;
    opacity: 0;
  }
`;
export const StyledUser = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #34343480;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const StyledLink = styled(NavLink)`
  fill: none;
  display: flex;

  align-items: center;
  padding: 16px 20px;
  border-radius: 8px;
  max-width: 185px;
  max-height: 34px;
  text-decoration: none;
  color: rgba(52, 52, 52, 0.5);
  margin-bottom: 18px;
  &:active {
    color: rgba(62, 133, 243, 1);
    background-color: #e3f3ff;
  }
  &:hover {
    color: #3e85f3;
    background-color: #e3f3ff;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: rgba(62, 133, 243, 1);
  }
  font-size: 14px;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: 16px;
    height: 56px;
    padding: 18px 20px;
  }
`;

export const UserNavTitle = styled(Typography)`
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(52, 52, 52, 0.5);
  // margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
    // margin-bottom: 32px;
  }
`;

export const StyledButtonLogout = styled(Button)`
  width: 131px;
  height: 46px;
  left: 20px;
  bottom: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    left: 32px;
  }
`;
export const StyledIcon = styled(Icon)`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
export const Overlay = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: transparent;
  z-index: 10;
`;
export const StyledLogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

// import { Typography, Container, styled, Box, Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import Icon from 'utils/Icon/Icon';
// // import Icon from '../../utils/Icon/Icon';

// export const SideBarIcon = styled(Icon)`
//   margin-right: 8px;
//   @media screen and (min-width: 768px) {
//    margin-right: 10px;
//   //   width: 24px;
//   // height: 24px;
//     // @media screen and (min-width: 1440px) {
//     //    margin-right: 10px;
//     // }
// `;

// // export const LogOutIcon = styled(Icon)`
// //   margin-left: 6px;
// //   @media screen and (min-width: 768px) {
// //    margin-right: 10px;
// //   //   width: 24px;
// //   // height: 24px;
// //     // @media screen and (min-width: 1440px) {
// //     //    margin-right: 10px;
// //     // }
// // `;

// export const StyledContainer = styled(Container)`
//   // display: ${props => (props.data ? 'flex' : 'none')};
//   // width: 60vw;
//   // height: 100vh;
//   // z-index: 5;
//   // margin: 0;
//   // flex-direction: column;
//   // justify-content: space-between;

//   position: fixed;
//   z-index: 589;
//   box-sizing: border-box;
//   height: 100vh;
//    width: 60vw;
//   padding: 24px 20px;
//   transform: translateX(-100%);
//   color: #FFFFFF;
//    @media screen and (min-width: 375px) {
//     width: 225px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 38vw;
//     padding: 24px 32px;
//   }
//   @media screen and (max-width: 1440px) {
//     transition: transform 350ms ease-in-out;
//     &.isMenuOpen {
//       transform: translateX(0px);
//     }
//   }
//   @media screen and (min-width: 1440px) {
//       position: relative;
//     transform: translateX(0px);
//     padding: 32px 24px
//     width: 20vw;
//   }
// `;

// export const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   margin-left: 20px;
// `;
// export const StyledHeader = styled(Box)`
//    display: flex;
//   justify-content: space-between;
//   align-items: center;

//   }
// `;

// export const StyleHeagerText = styled(Typography)`
// margin-left: 6px;
//  font-family: 'Inter';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.375;
//   color: #3e85f3;
//   text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
//     0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
//   @media screen and (min-width: 768px) {
//     font-weight: 600;
//     font-size: 18px;
//     line-height: 1.375;
//     @media screen and (min-width: 1440px) {
//       font-size: 24px;
//       line-height: 1;
//     }

// `;

// export const StyledPicture = styled(Container)`
//   width: 36px;
//   height: 35px;

//   @media screen and (min-width: 768px) {
//     width: 60px;
//     height: 58px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 71px;
//     height: 68px;
//   }
// `;

// export const StyledImgAuthNav = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media screen and (min-width: 768px) {
//     flex-direction: row-reverse;
//   }
// `;

// export const StyledButtonClose = styled(Button)`
//   display: block;
//   width: 33px;
//   height: 33px;
//   stroke: #343434;

//   @media (min-width: 768px) {
//     display: none;
//   }

//   :hover {
//     color: rgba(62, 133, 243, 1);
//     background-color: transparent;
//   }
//   // opacity: 1;
//   // width: 24px;
//   // height: 24px;
//   // margin-left: 39px;
//   // padding: 0;
//   // color: rgba(132, 130, 138, 1);
//   // background-color: transparent;
//   // &:hover,
//   // &:focus {
//   //   color: rgba(62, 133, 243, 1);
//   //   background-color: transparent;
//   // }
//   // @media screen and (min-width: 768px) {
//   //   margin-left: 36px;
//   //   width: 36px;
//   //   height: 36px;
//   //   margin-left: 36px;
//   // }
//   // @media screen and (min-width: 1440px) {
//   //   width: 20vw;
//   //   opacity: 0;
//   // }
// `;
// export const StyledUser = styled(Typography)`
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 17px;
//   color: #34343480;
//   margin-bottom: 32px;
//   @media screen and (min-width: 768px) {
//     font-size: 18px;
//     line-height: 24px;
//   }
// `;
// export const StyledLink = styled(NavLink)`
//   stroke: rgba(52, 52, 52, 0.5);
//   fill: none;
//   display: flex;

//   align-items: center;
//   box-sizing: border-box;
//   text-align: center;
//   padding: 16px 20px;
//   border-radius: 8px;
//   width: 100%;
//   text-decoration: none;
//   color: rgba(52, 52, 52, 0.5);
//   margin-bottom: 18px;
//   &.active {
//     color: rgba(62, 133, 243, 1);
//   }
//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: rgba(62, 133, 243, 1);
//     background: #e3f3ff;
//   }
//   font-size: 14px;
//   line-height: 1.21;

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.19;
//     margin-bottom: 16px;
//     height: 56px;
//     padding: 18px 20px;
//   }
// `;

// export const UserNavTitle = styled(Typography)`
//   display: flex;
//   align-items: center;
//   box-sizing: border-box;
//   font-size: 12px;
//   line-height: 1.25;
//   color: rgba(52, 52, 52, 0.5);
//   margin-bottom: 24px;

//   @media screen and (min-width: 768px) {
//     font-size: 14px;
//     line-height: 1.21;
//     margin-bottom: 32px;
//   }
// `;

// export const StyledButtonLogout = styled(Button)`
//   width: 131px;
//   height: 46px;
//   left: 20px;
//   bottom: 24px;
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 18px;
//   color: rgba(255, 255, 255, 1);
//   background: #3e85f3;
//   box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
//   border-radius: 16px;
//   @media screen and (min-width: 768px) {
//     width: 141px;
//     height: 56px;
//     left: 32px;
//   }
// `;
// export const StyledIcon = styled(Icon)`
//   @media screen and (min-width: 375px) {
//     width: 20px;
//     height: 20px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 26px;
//     height: 26px;
//   }
// `;

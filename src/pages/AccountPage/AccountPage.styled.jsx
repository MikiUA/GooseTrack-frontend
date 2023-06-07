import styles from 'styled-components';
import { styled } from '@mui/material/styles';
import {
  Button,
  Paper,
  Box,
  InputLabel,
  OutlinedInput,
  Typography,
  DatePicker,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#DCEBF7',
      main: '#ffffff',
      dark: '#13151A',
      darkText: '#343434',
      contrast: '#3E85F3',
      label: '#111111',
      labelNormal: '#00000040',
    },
  },
});

const { light, main, dark, contrast, label, darkText, labelNormal } =
  theme.palette.primary;

/* <OutlinedInput
  // інші пропси
  sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: labelNormal, // колір рамки віджета
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: label, // колір рамки віджета при наведенні
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: label, // колір рамки віджета при фокусуванні
    },
  }}
/>; */

export const Container = styled(Paper)`
  && {
    position: relative;
    box-sizing: border-box;

    width: calc(100% - 40px);
    min-height: 654px;
    margin: 95px auto 0 auto;
    padding: 60px 18px 40px 18px;

    border-radius: 16px;

    @media (min-width: 375px) {
      width: 335px;
    }

    @media (min-width: 768px) {
      width: 704px;
      min-height: 854px;
      padding: 40px 0px;
      margin: 64px auto 38px auto;
    }

    @media (min-width: 1440px) {
      width: 1087px;
      min-height: 752px;
      padding: 60px 0px;
      margin: 32px;
    }
  }
`;

export const FormWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AvatarWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImgWrap = styled(Box)`
  position: absolute;
  top: -36px;

  @media (min-width: 768px) {
    position: relative;
    top: 0px;
  }
`;

export const Img = styles.img`
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${contrast};

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AddLabel = styles.label`
  box-sizing: border-box; 
  position: absolute;
  top: 62px;
  right: 15px;
  line-height: 1;
  font-size: 14px;
  height: 14px;

  @media (min-width: 768px) {
    top: 106px;
    right: 24px;
    font-size: 24px;
    height: 24px;
  }
`;

export const AddButton = styled(Button)`
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid ${contrast};
  width: 14px;
  height: 14px;
  padding: 0px;
  min-width: unset;
  min-height: unset;
  background-color: ${main};

  &:hover {
    background-color: ${contrast};
    color: ${main};
  }

  &:focus {
    background-color: ${contrast};
    color: ${main};
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const UserWrap = styled(Box)`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-top: 14px;
  }
`;

export const UserName = styled(Typography)`
  margin-bottom: 4px;

  color: ${darkText};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1;
  }
`;

export const User = styled(Typography)`
  color: ${darkText};
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const InputWrap = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  max-width: 100%;

  row-gap: 18px;
  margin-bottom: 40px;

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    row-gap: 26px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 88px;
    width: 758px;
    column-gap: 50px;
    justify-content: space-between;
  }
`;

export const Label = styled(InputLabel)`
  margin-bottom: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${label};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Input = styled(OutlinedInput)`
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  border-radius: 8px;

  &:hover : {
    border: 1px solid ${label};
  }

  &:focus : {
    border: 1px solid ${label};
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const ButtonWrap = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  && {
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    padding: 16px 0px;

    color: ${main};
    background-color: ${contrast};

    text-transform: none;
    text-align: center;
    font-weight: 600;
    font-size: 14px 
    line-height: 1.29; 
    
    border-radius: 16px;

    @media (min-width: 375px) {
      width: 196px;
    }

    @media (min-width: 768px) {
      width: 262px;
      height: 48px;
      padding: 15px 0px;
    }
  }
`;

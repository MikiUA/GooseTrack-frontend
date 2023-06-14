import styles from 'styled-components';
import { styled } from '@mui/material/styles';
import {
  Button,
  Paper,
  Box,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { ErrorMessage } from 'formik';
import { createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

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
      error: '#DA1414',
      accept: '#3CBC81',
      darkLabel: 'rgba(250, 250, 250, 0.3)',
    },
  },
});

const { main, contrast, label, darkText, error, accept, darkLabel } =
  theme.palette.primary;

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

export const AvatarSwgBox = styles.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${contrast};
  background-color: ${main};

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AvatarSwg = styles.svg`
  width: 48px;
  height: 48px;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
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
  color: ${main};
  fill: ${main};

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
  background-color: ${contrast};
  stroke: ${main};

  &:hover {
    background-color: ${main};
    stroke: ${contrast};
  }

  &:focus {
    background-color: ${main};
    stroke: ${contrast};
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const AddSwg = styles.svg`
  display: inline-block;

  width: 8px;
  height: 8px;
  stroke: inherit;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const UserWrap = styled(Box)`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-top: 14px;
  }
`;

export const UserName = styled(Typography)(
  ({ theme }) => `
  margin-bottom: 4px;

  color: ${theme.palette.mode === 'dark' ? `${main}` : `${darkText}`};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1;
  }
`
);

export const User = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? `${darkLabel}` : `${darkText}`};
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`
);

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
  //   color: ${label};
  color: ${props => (props.iserror ? `${error}` : `${accept}` || `${label}`)};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const StyledIconError = styled(RiErrorWarningLine)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${error};
`;
export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${accept};
`;

export const Input = styled(OutlinedInput)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  && .MuiInputBase-input {
    padding: 12px 0px 12px 18px;
    font-size: 14px;
    line-height: 1.29;
    height: 18px;
    font-weight: 600;
    border-radius: 8px;
    border: ${props =>
      props.iserror
        ? `1px solid ${error}`
        : `1px solid ${accept}` || '1px solid inherit'};
  }

  &:hover: {
    border: 1px solid ${label};
  }

  &:focus: {
    border: 1px solid ${label};
  }

  &:invalid {
    border: 1px solid red;
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: 1.12;

    && .MuiInputBase-input {
      padding: 13px 0px 13px 18px;
      font-size: 16px;
      line-height: 1.12;
      height: 20px;
      font-weight: 600;
    }
  }
`;

export const DateInput = styled(DatePicker)(
  ({ theme, iserror }) => `
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  && .MuiInputBase-root {
    height: 42px;
    border-radius: 8px;
    border-radius: 8px;
    border: ${
      iserror
        ? `1px solid ${error}`
        : `1px solid ${accept}` || '1px solid inherit'
    };  
  }

  && .MuiSvgIcon-root {
    color: ${theme.palette.mode === 'dark' ? `${main}` : `${label}`};
    width: 18px;
    height: 18px;
    font-size: 18px;
  }

  && .MuiInputBase-input {
    padding: 12px 0px 12px 18px;
    font-size: 14px;
    line-height: 1.29;
    height: 18px;
    font-weight: 600;
  }

  &.MuiFormControl-root {
    background-color: inherit;
  } 

  &:hover: {
    border: 1px solid ${label};
  }

  &:focus: {
    border: 1px solid ${label};
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: 1.12;

    && .MuiStack-root {
      height: 46px;
    }

    && .MuiInputBase-root {
      height: 46px;
    }

    && .MuiInputBase-input {
      padding: 13px 0px 13px 18px;
      font-size: 16px;
      line-height: 1.12;
      height: 20px;
      font-weight: 600;
    }
  }
`
);

export const PopperDateStyles = {
  '& .MuiDateCalendar-root': {
    width: '327px',
    height: '354px',
  },
  '& .MuiPaper-root': {
    padding: '9px 0px 19px',
    backgroundColor: '#3E85F3',
    borderRadius: '16px',
  },
  '& .MuiPickersCalendarHeader-root': {
    position: 'relative',
    justifyContent: 'center',
  },
  '& .MuiPickersCalendarHeader-labelContainer': {
    margin: 0,
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: 1.2,
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-switchViewButton':
    { display: 'none' },
  '& .MuiPickersDay-root': {
    color: '#FFFFFF',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: 1.33,
  },
  '& .MuiPickersArrowSwitcher-spacer': {
    display: 'none',
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      left: '35px',
      top: '9px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      top: '9px',
      right: '35px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiDayCalendar-header': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: 1.28,
  },
  '& .MuiPickersDay-root.MuiPickersDay-today': {
    border: 'none',
  },
  '& .MuiPickersYear-yearButton': {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: 1.28,
  },
  '& .MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    width: '32px',
    height: '32px',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-today': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    width: '32px',
    height: '32px',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-disabled': {
    color: 'rgba(17, 17, 17, 0.15);',
  },
  '& .MuiPickersYear-root.Mui-disabled': {
    color: 'rgba(17, 17, 17, 0.15);',
  },

  '@media (min-width: 768px)': {
    '& .MuiDateCalendar-root': {
      width: '373px',
      minHeight: '354px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
  },
};

export const ButtonWrap = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`

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
`;

export const ErrorInputValue = styles(ErrorMessage)`
  font-size: 12px;
  line-height: 1.17;
  color: ${error};
  margin-top: 8px;
  margin-left: 18px;
`;

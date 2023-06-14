import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import { TimeField } from '@mui/x-date-pickers/TimeField';

export const CustomTextField = styled(TextField)(
  ({ theme }) => `
  & input::placeholder: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '14px',
    color: '#343434',
  },
`
);

export const CustomTimeField = styled(TimeField)`
  & input::placeholder {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    color: #343434;
  }
`;

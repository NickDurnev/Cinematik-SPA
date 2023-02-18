import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { device } from 'helpers/deviceSizes';

const InputWrap = styled(Paper)`
  display: flex;
  align-items: center;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.bgInputColor};

  border-radius: 10px;

  & input {
    padding: 15px 0;
    padding-left: 20px;
    color: ${({ theme }) => theme.textColor};
    font-family: 'Muller';
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
  }

  & svg {
    stroke: ${({ theme }) => theme.textColor};
  }

  @media ${device.tablet} {
    width: ${({ width }) => width};
  }
`;

export default InputWrap;

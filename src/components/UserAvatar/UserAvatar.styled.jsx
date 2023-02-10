import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { device } from '../../helpers/deviceSizes';

const Wrap = styled(Avatar)`
display:none;
    width: 60px;
    height: 60px;
    font-size: 25px,
    line-height: 25px;
    letter-spacing: 0.05em;
    background-color: transparent;
    color: ${({ theme }) => theme.textColor};        
    border: 1px solid;
    border-color: ${({ theme }) => theme.textColor};

    @media ${device.tablet} {
    display:flex;
    }
`;

export default Wrap;

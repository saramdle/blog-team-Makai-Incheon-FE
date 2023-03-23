import React from 'react-dom';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { ButtonType } from 'types/Palette';

const CustomButton = (props: ButtonType) => {
    const { innerText, color } = props;
    const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(color['300']),
        backgroundColor: color['300'],
        fontFamily: 'Noto Sans KR',
        '&:hover': {
            backgroundColor: color['500'],
        },
    }));

    return <StyledButton variant="contained">{innerText}</StyledButton>;
};

export default CustomButton;

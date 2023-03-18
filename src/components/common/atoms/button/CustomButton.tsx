import React from 'react-dom';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

interface palette {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}

type ButtonType = {
    color: palette;
    innerText: string;
};

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

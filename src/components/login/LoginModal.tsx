import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
//
// type modalType = {
//     open: boolean;
// };

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px;
`;

const Wrapper = styled.div`
    margin: 10px 50px;
`;

const TextWrapper = styled.h4`
    margin: 50px auto 75px;
    text-align: center;
`;

type LoginModalType = {
    onClose: () => void;
};
const LoginForm = (props: LoginModalType) => {
    const { onClose } = props;
    return (
        <Wrapper>
            <TextWrapper>Login</TextWrapper>
            <form>
                <TextField label="ID" variant="standard" />
                <TextField label="PW" type="password" autoComplete={''} variant="standard" />
            </form>
            <hr />
            <FlexBox>
                <Button variant="contained">Login</Button>
                <Button variant="outlined" onClick={onClose}>
                    Close
                </Button>
            </FlexBox>
        </Wrapper>
    );
};

export default LoginForm;

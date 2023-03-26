import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import TagList from '../common/atoms/tagList/TagList.';
import { ChipDataType } from '../../types/TagTypes';

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
const dummy: ChipDataType[] = [
    { key: 0, label: 'dummy' },
    { key: 2, label: 'dummy' },
    { key: 3, label: 'dummy' },
];
const LoginForm = (props: LoginModalType) => {
    const { onClose } = props;
    return (
        <Wrapper>
            <TextWrapper>Search</TextWrapper>
            <TextField label="Tag" variant="standard" />
            <hr />
            <TagList deletable dataObject={dummy} />
            <hr />
            <TagList deletable={false} dataObject={dummy} />
        </Wrapper>
    );
};

export default LoginForm;

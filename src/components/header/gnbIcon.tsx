import React from 'react';
import styled from '@emotion/styled';
import { GnbIconType } from 'types/GnbIconType';

const Wrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    height: 72px;
    align-items: center;
    cursor: pointer;
`;

const ImgBox = styled.img`
    width: 24px;
    height: 24px;
`;

const TextBox = styled.p`
    font-size: 0.625rem;
`;

const GnbIcon = (props: GnbIconType) => {
    const { image, description, onclick, link } = props;
    return (
        <Wrapper onClick={onclick}>
            <ImgBox src={image} alt="" />
            <TextBox>{description}</TextBox>
        </Wrapper>
    );
};

export default GnbIcon;

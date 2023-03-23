import React from 'react';
import styled from '@emotion/styled';

interface GnbIconType {
    image: string;
    description: string;
    // onHover?: () => void;
    // onLeave?: () => void;
}

const Wrapper = styled.div`
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
    font-size: 0.825rem;
`

const GnbIcon = (props: GnbIconType) => {
    const { image, description } = props;
    return (
        <Wrapper>
            <ImgBox src={image} alt="" />
            <TextBox>{description}</TextBox>
        </Wrapper>
    );
};

export default GnbIcon;

import styled from '@emotion/styled';
import React from 'react';
import type { CardPropType } from 'types/CardTypes';
import Box from '@mui/material/Box';
import TagList from '../tagList/TagList.';

// const content = (
//     // <>
//
//     // </>
// );
const StyledCard = styled.div`
    border: #676767 1px solid;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-out;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 4px rgba(0, 0, 0, 0.25);
        background: linear-gradient(180deg, #ffffff 0%, #ecf9ff 100%);
    }
`;

const CardContent = styled.div`
    margin: 25px;
`;

const CardTitle = styled.div`
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
`;

const CustomCard = (props: CardPropType) => {
    const { title, content, tagDataObject, img } = props;
    return (
        <Box sx={{ width: 300, height: 380 }}>
            <StyledCard>
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <hr />
                    <TagList deletable={false} dataObject={tagDataObject} clickable={false} />
                    {content}
                </CardContent>
            </StyledCard>
        </Box>
    );
};

export default CustomCard;

import React from 'react';
import styled from '@emotion/styled';

const Cursor = styled.div`
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    z-index: 999;
    //transition: 0.s ease;
    background: #fff;
    mix-blend-mode: difference;
`;

export default Cursor;

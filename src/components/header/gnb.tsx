import React from 'react';
import styled from '@emotion/styled';
import list from 'style/icon/list.svg';
import search from 'style/icon/search.svg';
import login from 'style/icon/login.svg';
import GnbIcon from './gnbIcon';

const GNBContainer = styled.div`
    position: fixed;
    width: 100vw;
    top: 0;
    height: 80px;
    z-index: 99;
    background: white;
`;

const GnbWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    margin-left:10px;
    font-family: 'Hurricane';
    font-size: 3rem;
`;

const GNBBtnContainer = styled.div`
    display: flex;
    justify-content: center;
  
`;
const Gnb = () => {
    return (
        <GNBContainer>
            <GnbWrapper>
                <Logo>Blog</Logo>
                <GNBBtnContainer>
                    <GnbIcon image={list} description={'글목록'}/>
                    <GnbIcon image={search} description={'검색'}/>
                    <GnbIcon image={login} description={'로그인'}/>
                </GNBBtnContainer>
            </GnbWrapper>
        </GNBContainer>
    );
};

export default Gnb;

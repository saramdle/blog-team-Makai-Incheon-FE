import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import list from 'style/icon/list.svg';
import search from 'style/icon/search.svg';
import login from 'style/icon/login.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Box, Modal } from '@mui/material';
import GnbIcon from './gnbIcon';
import LoginModal from '../login/LoginModal';
import LoginForm from '../login/LoginModal';
import SearchModal from '../search/SearchModal';

const GNBContainer = styled.div`
    position: sticky;
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
    margin-left: 10px;
    font-family: 'Hurricane';
    font-size: 3rem;
`;

const GNBBtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const LoginModalInner = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height:500px;
    background-color: white;
    border-radius: 25px;
    display: flex;
  flex-direction: column;
`;


const SearchModalInner = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height:500px;
    background-color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
`;

const Gnb = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const navigate = useNavigate();
    const loginOpenCb = () => {
        setLoginOpen(true);
    };
    const loginClose = () => {
        setLoginOpen(false);
    };

    const searchOpenCb = () => {
        setSearchOpen(true);
    };

    const searchClose = () => {
        setSearchOpen(false);
    }

    const gotoList = useCallback(() => {
        navigate('/list');
    }, []);
    return (
        <>
            <Modal open={loginOpen} onClose={loginClose}>
                <LoginModalInner>
                    <LoginForm onClose={loginClose}/>
                </LoginModalInner>
            </Modal>
            <Modal open={searchOpen} onClose={searchClose}>
                <SearchModalInner>
                    <SearchModal onClose={searchClose}/>
                </SearchModalInner>
            </Modal>

            <GNBContainer>
                <GnbWrapper>
                    <Link to="/">
                        <Logo>Blog</Logo>
                    </Link>
                    <GNBBtnContainer>
                        <GnbIcon image={list} description="글목록" link="list" onclick={gotoList} />
                        <GnbIcon image={search} description="검색" link="search" onclick={searchOpenCb}/>
                        <GnbIcon
                            image={login}
                            description="로그인"
                            link="login"
                            onclick={loginOpenCb}
                        />
                    </GNBBtnContainer>
                </GnbWrapper>
            </GNBContainer>
        </>
    );
};

export default Gnb;

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import underline from 'style/underline.svg';
import type { ChipDataType } from 'types/TagTypes';
import smoothAppear from 'style/animations';
import TagList from '../common/atoms/tagList/TagList.';
import Grid from '../../style/Grid';
import CustomCard from '../common/atoms/card/Card';
import BoardRow from '../common/atoms/boardRow/boardRow';

const dummy: ChipDataType[] = [
    { key: 0, label: 'dummy' },
    { key: 2, label: 'dummy' },
    { key: 3, label: 'dummy' },
];
const TitleWrapper = styled.div`
    position: relative;
    animation: ${smoothAppear} 0.5s ease-in;
`;

const UnderLine = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 350px;
`;

const SubTitle = styled.h4`
    margin: 0 0 15px 0;
    animation: ${smoothAppear} 0.5s ease-in;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
`;

const SmoothAppearWrapper = styled.div`
    animation: ${smoothAppear} 0.5s ease-in;
    animation-delay: 0.6s;
    animation-fill-mode: backwards;
`;

const home = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '100px auto' }}>
            <TitleWrapper>
                <h1> 안녕하세요</h1>
                <h1>
                    {`{레이머}`}의 블로그입니다.
                    <UnderLine src={underline} alt="" />
                </h1>
            </TitleWrapper>
            <SubTitle>이런 포스트는 어떠세요?</SubTitle>
            <SmoothAppearWrapper>
                <TagList deletable={false} clickable dataObject={dummy} />
                <Grid>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((t) => (
                        <CustomCard key={t} uid={t} tagDataObject={dummy} title={t} content={t} img={null} />
                    ))}
                </Grid>
            </SmoothAppearWrapper>
            <SubTitle>최근게시글</SubTitle>
            <SmoothAppearWrapper>
                {[1, 2, 3, 4, 5].map((t) => (
                    <BoardRow key={t} uid={t} title={`${t}`} content="더미더미" date="2023-02-23" />
                ))}
            </SmoothAppearWrapper>
            <header className="App-header" />
        </div>
    );
};

export default home;

import React, { useRef, useState } from 'react';
import './App.css';
import type { PositionType } from 'types/CursorType';
import type { ChipDataType } from 'types/TagTypes';
import Cursor from './components/common/cursor/Cursor';
import TagList from './components/common/atoms/tagList/TagList.';
import BoardRow from './components/common/atoms/boardRow/boardRow';
import Grid from './style/Grid';
import CustomCard from './components/common/atoms/card/Card';
import Gnb from './components/header/gnb';

const dummy: ChipDataType[] = [
    { key: 0, label: 'dummy' },
    { key: 2, label: 'dummy' },
    { key: 3, label: 'dummy' }
];

const position: PositionType = { x: 0, y: 0 };
const App: React.FC = () => {
    return (
        <div className="App">
            <Gnb/>
            <Cursor/>
            <div style={{ maxWidth: '1200px', margin:'100px auto' }}>
                <h1>안녕하세요</h1>
                <h1>{`{레이머}`}의 블로그입니다.</h1>
                <h4>이런 포스팅은 어떠세요?</h4>
                <TagList deletable={false} clickable dataObject={dummy} />

                <Grid>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((t) => (
                        <CustomCard key={t} tagDataObject={dummy} title={t} content={t} img={null} />
                    ))}
                </Grid>
                <h4>최근게시글</h4>
                <div>
                    {[1, 2, 3, 4, 5].map((t) => (
                        <BoardRow key={t} title={`더미${t}`} content="더미더미" date="2023-02-23" />
                    ))}
                </div>
                <header className="App-header" />
            </div>
        </div>
    );
};

export default App;

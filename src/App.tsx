import React, { useState } from 'react';
import './App.css';
import { purple } from '@mui/material/colors';
import CustomButton from './components/common/atoms/button/CustomButton';
import TagList from './components/common/atoms/tagList/TagList.';
import CustomCard from './components/common/atoms/card/Card';
import BoardRow from './components/common/atoms/boardRow/boardRow';
import Cursor from './components/common/cursor/Cursor';

const dummyTagData = [
    { key: 0, label: 'a' },
    { key: 1, label: 'b' },
    { key: 2, label: 'c' },
];

type PositionType = {
    x: number;
    y: number;
};


const App: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<PositionType>({x:0,y:0});
    const eventHandler = (e: any) => {
        setMousePosition({x:e.clientX, y:e.clientY})
    };


    return (
        <div className="App" onMouseMove={eventHandler}>
            <Cursor style={{transform:`translate(${mousePosition.x}px,${mousePosition.y}px)`}}/>
            <div>테스트</div>
            <div>테스트2</div>
            <img src="https://source.unsplash.com/random/400x400" alt=""/>
            <header className="App-header" />

        </div>
    );
};

export default App;

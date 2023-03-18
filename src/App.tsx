import React from 'react';
import './App.css';
import { purple } from '@mui/material/colors';
import CustomButton from './components/common/atoms/button/CustomButton';
import TagList from './components/common/atoms/tagList/TagList.';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header" />
            <CustomButton color={purple} innerText="test" />
            <TagList />
        </div>
    );
};

export default App;

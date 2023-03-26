import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cursor from './components/common/cursor/Cursor';
import Gnb from './components/header/gnb';
import Home from './components/home/home';
import Editor from './components/editor/editor';
import List from './components/list/list';
import Viewer from './components/viewer/Viewer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Gnb />
            <Cursor />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/list/:uid" element={<Viewer />} />

                <Route path="edit" element={<Editor />}>
                    <Route path=":uid" />
                </Route>
                <Route path="view" />
            </Routes>
        </div>
    );
};

export default App;

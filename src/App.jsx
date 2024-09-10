import React from 'react';
import Projects from './components/projects/Projects.jsx';
import { HeaderSimple } from './components/HeaderSimple.jsx';
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutTeam from "./components/AboutRise/AboutTeam.jsx";
import '@mantine/core/styles.css';
import {MantineProvider } from '@mantine/core';
function App() {
    return (
        <MantineProvider forceColorScheme={'dark'}>
            <BrowserRouter>
                <HeaderSimple/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutTeam />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/team" element={<HomePage/>} /> */}
                    <Route path="/wiki" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;

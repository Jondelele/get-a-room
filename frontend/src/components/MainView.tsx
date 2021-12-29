import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import { testIndexCall } from '../services/testService';

const MainView = () => {
    const [testData, setTestData] = useState('');

    useEffect(() => {
        testIndexCall().then(setTestData);
    }, []);

    return (
        <Box
            id="main-view"
            display="flex"
            flexDirection="column"
            height="100vh"
        >
            <h1>{testData}</h1>
            <h1>Test text</h1>
            <NavBar />
        </Box>
    );
};

export default MainView;

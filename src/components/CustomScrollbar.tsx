// src/components/CustomScrollbar.tsx
import React from 'react';
import { GlobalStyles } from '@mui/material';
import colors from '../theme/colors';

const CustomScrollbar: React.FC = () => (
    <GlobalStyles
        styles={{
            /* Webkit-based browsers (Chrome, Safari, Edge) */
            '::-webkit-scrollbar': {
                width: '8px',
            },
            '::-webkit-scrollbar-track': {
                backgroundColor: colors.navy,
            },
            '::-webkit-scrollbar-thumb': {
                backgroundColor: colors.lightestNavy,
                borderRadius: '10px',
                border: `2px solid ${colors.navy}`,
            },
            '::-webkit-scrollbar-thumb:hover': {
                backgroundColor: colors.green,
            },

            /* Firefox */
            '*': {
                scrollbarWidth: 'thin',
                scrollbarColor: `${colors.lightestNavy} ${colors.navy}`,
            },
        }}
    />
);

export default CustomScrollbar;

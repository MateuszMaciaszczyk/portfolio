import React from 'react';
import { Box, Typography } from '@mui/material';
import colors from '../theme/colors';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: colors.navy,
                padding: '1rem 0',
                color: colors.lightSlate,
                textAlign: 'center',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontSize: '1rem',
                    color: colors.lightestSlate,
                    '& span': { color: colors.green },
                }}
            >
                © Designed and developed by <span>Mateusz Maciaszczyk</span>
            </Typography>
        </Box>
    );
};

export default Footer;

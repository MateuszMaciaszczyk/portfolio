import React from 'react';
import {Box, Typography, Grid, Paper, Divider} from '@mui/material';
import { Html, Css, Javascript, Coffee, GitHub } from '@mui/icons-material';
import colors from '../theme/colors';

const skills = [
    { name: 'HTML5', icon: <Html fontSize="large" /> },
    { name: 'Python', icon: <Coffee fontSize="large" /> },
    { name: 'Java', icon: <Coffee fontSize="large" /> },
    { name: 'CSS', icon: <Css fontSize="large" /> },
    { name: 'SQL', icon: <Coffee fontSize="large" /> },
    { name: 'Spring', icon: <Coffee fontSize="large" /> },
    { name: 'JavaScript', icon: <Javascript fontSize="large" /> },
    { name: 'AWS', icon: <Coffee fontSize="large" /> },
    { name: 'Kubernetes', icon: <Coffee fontSize="large" /> },
    { name: 'TypeScript', icon: <Coffee fontSize="large" /> },
    { name: 'React', icon: <Coffee fontSize="large" /> },
    { name: 'Git', icon: <GitHub fontSize="large" /> },
];

const Skills: React.FC = () => {
    return (
        <Box
            id='skills'
            sx={{
                maxWidth: '60%',
                margin: '0 auto',
                marginTop: '12rem',
                color: colors.lightestSlate }}>
            <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                03. Skills
            </Typography>
            <Divider sx={{ marginBottom: '1.5rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />
            <Grid container spacing={3}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                                borderRadius: '1rem',
                                backgroundColor: colors.lightNavy,
                                color: colors.slate,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: `0 4px 20px ${colors.green}`,
                                },
                            }}
                        >
                            <Box sx={{ fontSize: '2rem', color: colors.green, marginRight: '1rem' }}>
                                {skill.icon}
                            </Box>
                            <Typography variant="h6" sx={{ color: colors.lightestSlate, fontWeight: 'bold' }}>
                                {skill.name}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;

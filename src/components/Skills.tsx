import React from 'react';
import {Box, Typography, Grid, Paper, Divider} from '@mui/material';
import { Html, Css, Javascript, Coffee, GitHub } from '@mui/icons-material';
import colors from '../theme/colors';

const skills = [
    { name: 'HTML5', icon: <i className="devicon-html5-plain"></i>},
    {name: 'Python', icon: <i className="devicon-python-plain"></i>},
    {name: 'Java', icon: <i className="devicon-java-plain"></i>},
    {name: 'CSS', icon: <i className="devicon-css3-plain"></i>},
    {name: 'SQL', icon: <i className="devicon-azuresqldatabase-plain"></i>},
    {name: 'Spring', icon: <i className="devicon-spring-plain"></i>},
    {name: 'JavaScript', icon: <i className="devicon-javascript-plain"></i>},
    {name: 'AWS', icon: <i className="devicon-amazonwebservices-plain-wordmark"></i>},
    {name: 'Kubernetes', icon: <i className="devicon-kubernetes-plain"></i>},
    {name: 'TypeScript', icon: <i className="devicon-typescript-plain"></i>},
    {name: 'React', icon: <i className="devicon-react-plain"></i>},
    {name: 'Git', icon: <i className="devicon-git-plain"></i>},
];

const Skills: React.FC = () => {
    return (
        <Box
            id='skills'
            sx={{
                maxWidth: '60%',
                margin: '0 auto',
                marginTop: '20rem',
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
                                    filter: 'grayscale(0%)',
                                    transform: 'scale(1.07)',
                                    boxShadow: `0 0.3rem 0.5rem ${colors.green}`,
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

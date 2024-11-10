import React from 'react';
import { Box, Typography, Grid, Divider, Chip } from '@mui/material';
import colors from '../theme/colors';
import portfolio from '../images/portfolio.png';

const projects = [
    {
        name: 'Portfolio',
        description: 'A web application that allows users to get to know me and explore my projects, built using React ' +
            'and TypeScript. The project involved creating an accessible user interface, optimizing performance, ' +
            'and implementing a responsive design.',
        technologies: ['React', 'TypeScript'],
        image: portfolio,
    },
];

const Projects: React.FC = () => {
    return (
        <Box
            id="projects"
            sx={{
                maxWidth: '70%',
                margin: '0 auto',
                marginTop: '12rem',
            }}
        >
            <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                04. Projects
            </Typography>
            <Divider sx={{ marginBottom: '2rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />

            <Grid container spacing={5}>
                {projects.map((project, index) => (
                    <Grid container item xs={12} spacing={3} key={index}>
                        {/* Project Image on the Left */}
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src={project.image}
                                alt={project.name}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s ease-in-out',
                                    '&:hover': {
                                        filter: 'grayscale(0%)',
                                        transform: 'scale(1.05)',
                                        boxShadow: `0 4px 20px ${colors.green}`,
                                    },
                                }}
                            />
                        </Grid>

                        {/* Project Details on the Right */}
                        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                }}
                            >
                                {/* Project Title */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: colors.green,
                                        fontWeight: 'bold',
                                        fontSize: '2rem',
                                        marginBottom: '2rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {project.name}
                                </Typography>

                                {/* Project Description */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: colors.lightSlate,
                                        marginBottom: '1rem',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        textAlign: 'center',
                                        backgroundColor: colors.lightNavy,
                                    }}
                                >
                                    {project.description}
                                </Typography>

                                {/* Technologies Used */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                                    {project.technologies.map((tech, i) => (
                                        <Chip
                                            key={i}
                                            label={tech}
                                            sx={{
                                                color: colors.lightestSlate,
                                                fontSize: '0.85rem',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;

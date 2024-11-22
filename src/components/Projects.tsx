import React from 'react';
import { Box, Typography, Grid, Divider, Chip } from '@mui/material';
import colors from '../theme/colors';
import portfolio from '../images/portfolio.png';
import workout from '../images/workout.png';
import darwin from '../images/darwin.png';
import database from '../images/database.png';

const projects = [
    {
        name: 'Portfolio',
        description: 'A web application that allows users to get to know me and explore my projects, built using React ' +
            'and TypeScript. The project involved creating an accessible user interface, optimizing performance, ' +
            'and implementing a responsive design.',
        technologies: ['React', 'TypeScript'],
        image: portfolio,
    },
    {
        name: 'Workout Tracker',
        description: 'This web application is a tool that helps users organize, monitor and track their\n' +
            'workouts and progress in sports. The application allows users to create personalized\n' +
            'training plans, track their workouts and updating the number of current sets and\n' +
            'repetitions. It also tracks the user\'s progress in given exercises.',
        technologies: ['HMTL', 'CSS', 'JavaScript', 'Java', 'Spring', 'MySQL'],
        image: workout,
    },
    {
        name: 'Darwin World',
        description: 'An application simulating the game of life. It\'s a simulation\n' +
            'creating an evolving ecosystem where creatures roam, forage, and reproduce in\n' +
            'plains and jungles. The environment, creatures\' genes, and behaviors are\n' +
            'configurable, allowing users to run and visualize dynamic simulations.',
        technologies: ['Java', 'JavaFX'],
        image: darwin,
    },
    {
        name: 'Database Project',
        description: 'An database project made for university classes. The project was about creating a database\n' +
            'for a fictional school. The database was designed to store information about employees, classes and courses\n',
        technologies: ['MySQL'],
        image: database,
    },
];

const Projects: React.FC = () => {
    return (
        <Box
            id="projects"
            sx={{
                maxWidth: '70%',
                margin: '0 auto',
                marginTop: '15rem',
            }}
        >
            <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                04. Projects
            </Typography>
            <Divider sx={{ marginBottom: '2rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />

            <Grid container spacing={5}>
                {projects.map((project, index) => (
                    <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        key={index}
                        marginTop="3rem"
                        alignItems={'center'}
                        direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                    >
                        {/* Project Image */}
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src={project.image}
                                alt={project.name}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    maxHeight: '17rem',
                                    minHeight: '17rem',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s ease-in-out',
                                    '&:hover': {
                                        filter: 'grayscale(0%)',
                                        transform: 'scale(1.07)',
                                        boxShadow: `0 0.5rem 1rem ${colors.green}`,
                                    },
                                }}
                            />
                        </Grid>

                        {/* Project Details */}
                        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%' }}>
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

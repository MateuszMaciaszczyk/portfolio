import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import colors from '../theme/colors';
import ProjectCard from './ProjectCard';

import data from '../data.json';

import portfolio from '../images/portfolio.png';
import workout from '../images/workout.png';
import darwin from '../images/darwin.png';
import database from '../images/database.png';
import scheduler from '../images/scheduler.png';
import fintrack from '../images/fintrack.png';

const imageMapping: Record<string, string> = {
    portfolio: portfolio,
    workout: workout,
    darwin: darwin,
    database: database,
    scheduler: scheduler,
    fintrack: fintrack,
};

const Projects: React.FC = () => {
    return (
        <Box
            id="projects"
            sx={{
                maxWidth: '60%',
                margin: '0 auto',
                marginTop: '15rem',
            }}
        >
            <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                04. Projects
            </Typography>
            <Divider sx={{ marginBottom: '2rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />

            <Grid container spacing={5}>
                {data.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        image={imageMapping[project.image]}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;

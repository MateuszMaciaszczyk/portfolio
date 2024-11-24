import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
import colors from '../theme/colors';

interface ProjectCardProps {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, image, reverse = false }) => {
    return (
        <Grid
            container
            spacing={3}
            marginTop="3rem"
            alignItems="center"
            direction={reverse ? 'row-reverse' : 'row'}
        >
            {/* Project Image */}
            <Grid item xs={12} md={6}>
                <Box
                    component="img"
                    src={image}
                    alt={name}
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
                        {name}
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
                        {description}
                    </Typography>

                    {/* Technologies Used */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        {technologies.map((tech, i) => (
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
    );
};

export default ProjectCard;

import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Box, Typography, Button, Divider } from '@mui/material';
import colors from '../theme/colors';
import data from '../data.json';

const Experience: React.FC = () => {
    const [view, setView] = useState('work');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: string) => {
        if (newView) {
            setView(newView);
            setSelectedIndex(0);
        }
    };

    const experienceList = view === 'work' ? data.workExperience : data.educationExperience;
    const selectedExperience = experienceList[selectedIndex];
    const isWorkExperience = (experience: any): experience is { company: string; role: string; duration: string; details: string[] } => {
        return 'company' in experience;
    };

    return (
        <Box
            id='experience'
            sx={{
                maxWidth: '60%',
                margin: '0 auto',
                marginTop: '15rem',
                color: colors.lightestSlate
            }}
        >
            <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                02. Experience
            </Typography>
            <Divider sx={{ marginBottom: '1.5rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />
            <ToggleButtonGroup
                color="primary"
                value={view}
                exclusive
                onChange={handleViewChange}
                sx={{ mb: 2, borderBottom: `0.3rem solid ${colors.lightestNavy}` }}
            >
                <ToggleButton value="work" sx={{ color: colors.slate, '&.Mui-selected': { color: colors.green } }}>Work</ToggleButton>
                <ToggleButton value="education" sx={{ color: colors.slate, '&.Mui-selected': { color: colors.green } }}>Education</ToggleButton>

                <Typography variant="h3" sx={{ color: colors.white, fontSize: '2rem', mb: 1, marginLeft: '2rem' }}>
                    {view === 'work' ? "Where I've Worked" : "Where I've Studied"}
                </Typography>
            </ToggleButtonGroup>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', borderLeft: `0.1rem solid ${colors.lightestNavy}`, paddingLeft: 2 }}>
                    {experienceList.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            sx={{
                                justifyContent: 'flex-start',
                                color: selectedIndex === index ? colors.green : colors.slate,
                                textAlign: 'left',
                                paddingY: 1,
                                transition: 'color 0.3s',
                                '&:hover': { color: colors.green },
                            }}
                        >
                            {isWorkExperience(item) ? item.company : item.institution}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flex: 3 }}>
                    <Typography variant="h6" sx={{ color: colors.white, fontSize: '1.5rem', mb: 1 }}>
                        {isWorkExperience(selectedExperience) ? (
                            <>
                                <span>{selectedExperience.role} @ </span>
                                <span style={{ color: colors.green }}>{selectedExperience.company}</span>
                            </>
                        ) : (
                            <>
                                <span>{selectedExperience.degree} @ </span>
                                <span style={{ color: colors.green }}>{selectedExperience.institution}</span>
                            </>
                        )}
                    </Typography>

                    <Typography sx={{ color: colors.lightSlate, mb: 2, fontSize: '0.8rem' }}>{selectedExperience.duration}</Typography>
                    <ul style={{ paddingLeft: 0, listStyleType: 'none', color: colors.lightestSlate }}>
                        {selectedExperience.details.map((detail, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem' }}>
                                <Typography sx={{ color: colors.lightSlate }}>{detail}</Typography>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default Experience;
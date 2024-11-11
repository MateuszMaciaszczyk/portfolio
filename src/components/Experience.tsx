import React, { useState } from 'react';
import {ToggleButton, ToggleButtonGroup, Box, Typography, Button, Divider} from '@mui/material';
import colors from '../theme/colors';

type WorkExperience = {
    company: string;
    role: string;
    duration: string;
    details: string[];
};

type EducationExperience = {
    institution: string;
    degree: string;
    duration: string;
    details: string[];
};

const workExperience: WorkExperience[] = [
    {
        company: 'Haering',
        role: 'SWE Intern',
        duration: 'Jul 2023 - Sep 2023',
        details: [
            'During the job my task was to create backup management system and database\n' +
            'using Java and PostgreSQL. This program allows users to commission a backup on a\n' +
            'specific computer and this program will automatically place a task in Jira. After\n' +
            'backup is done user input information about it such as date, storage location, etc.\n' +
            'This program aims to optimize the process of safeguarding critical data on computers.',
        ],
    },
    {
        company: 'Haering',
        role: 'Technical Support',
        duration: 'Jul 2022 - Sep 2022',
        details: [
            'I was responsible for diagnosing and resolving IT issues, supporting end users with hardware, ' +
            'software, and network-related problems. I registered each ticket in the ticketing system, ' +
            'allowing me to effectively manage requests and ensure timely resolution. I assisted users with ' +
            'varying levels of technical knowledge, providing clear instructions and creating guides to help ' +
            'address common issues. I collaborated with IT teams on more complex cases and monitored infrastructure ' +
            'to prevent future disruptions.',
        ],
    },
];

const educationExperience: EducationExperience[] = [
    {
        institution: 'AGH',
        degree: 'BSc in Computer Science',
        duration: 'Oct 2022 - Present',
        details: [
            'Studying computer science at AGH, I am learning both the theoretical foundations and practical aspects ' +
            'of programming, algorithms, and database management. I explore topics related to application programming, ' +
            'operating systems, and artificial intelligence, giving me a comprehensive understanding of the IT industry. ' +
            'The studies enhance my analytical thinking and problem-solving skills, as well as provide experience in ' +
            'team collaboration on IT projects. This prepares me well for the challenges of the dynamic IT environment ' +
            'and allows me to better align my skills with market needs.',
        ],
    },
    {
        institution: 'I LO in Piotrkow Trybunalski',
        degree: 'Math-IT profile',
        duration: 'Sep 2019 - Jun 2022',
        details: [
            'I gained a solid foundation in mathematics and computer science. I learned to create websites, exploring ' +
            'technologies such as HTML, CSS, and basic JavaScript. The classes enhanced my creativity and programming ' +
            'skills, while also allowing me to apply mathematical theories to solving IT problems. This period provided ' +
            'me with the fundamental knowledge for further development in the field of IT.',
        ],
    },
];

const Experience: React.FC = () => {
    const [view, setView] = useState('work');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: string) => {
        if (newView) {
            setView(newView);
            setSelectedIndex(0);
        }
    };

    const experienceList = view === 'work' ? workExperience : educationExperience;
    const selectedExperience = experienceList[selectedIndex];

    return (
        <Box
            id='experience'
            sx={{
                maxWidth: '60%',
                margin: '0 auto',
                marginTop: '15rem',
                color: colors.lightestSlate }}>

            <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                02. Experience
            </Typography>
            <Divider sx={{ marginBottom: '1.5rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />
            {/* Toggle Button Group */}
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
                {/* Left-side List */}
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
                            {/* Conditional rendering based on view */}
                            {view === 'work' ? (item as WorkExperience).company : (item as EducationExperience).institution}
                        </Button>
                    ))}
                </Box>

                {/* Right-side Details */}
                <Box sx={{ flex: 3 }}>
                    <Typography variant="h6" sx={{ color: colors.white, fontSize: '1.5rem', mb: 1 }}>
                        {view === 'work' ? (
                            <>
                                <span>{(selectedExperience as WorkExperience).role} @ </span>
                                <span style={{ color: colors.green }}>{(selectedExperience as WorkExperience).company}</span>
                            </>
                        ) : (
                            <>
                                <span>{(selectedExperience as EducationExperience).degree} @ </span>
                                <span style={{ color: colors.green }}>{(selectedExperience as EducationExperience).institution}</span>
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

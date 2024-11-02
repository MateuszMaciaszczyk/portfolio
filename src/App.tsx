// src/App.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import colors from './theme/colors';
import Header from './components/Header';
import Section from './components/Section';

function App() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{ backgroundColor: colors.navy, minHeight: '100vh', color: colors.white }}>
            {/* Header */}
            <Header scrollToSection={scrollToSection} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    textAlign: 'center',
                    color: colors.lightestSlate,
                    padding: '0 2rem',
                }}
            >
                <Typography variant="h5" sx={{ fontSize: '2rem', marginBottom: '1rem', color: colors.green }}>
                    Hi, my name is
                </Typography>
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '8rem', marginBottom: '1rem', color: colors.lightestSlate }}>
                    Mateusz Maciaszczyk
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', letterSpacing: '0.1rem', fontSize: '2rem', color: colors.slate }}>
                    SOFTWARE ENGINEER, BACK END & APP DEVELOPER.
                </Typography>
            </Box>

            {/* Sections */}
            <Section id="about" backgroundColor={colors.navy} />
            <Section id="experience" backgroundColor={colors.navy} />
            <Section id="skills" backgroundColor={colors.navy} />
            <Section id="projects" backgroundColor={colors.navy} />
            <Section id="contact" backgroundColor={colors.navy} />
        </div>
    );
}

export default App;

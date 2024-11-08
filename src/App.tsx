// src/App.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import colors from './theme/colors';
import Header from './components/Header';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import CustomScrollbar from './components/CustomScrollbar';
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";

function App() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementRect = element.getBoundingClientRect();
            const offset = (window.innerHeight - elementRect.height) / 2;
            window.scrollTo({
                top: elementRect.top + window.scrollY - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div style={{ backgroundColor: colors.navy, minHeight: '100vh', color: colors.white }}>
            {/* Header */}
            <Header scrollToSection={scrollToSection} />
            <CustomScrollbar />
            <Main />
            <AboutMe />

            <Section id="experience" backgroundColor={colors.navy} />
            <Section id="skills" backgroundColor={colors.navy} />
            <Section id="projects" backgroundColor={colors.navy} />
            <Section id="contact" backgroundColor={colors.navy} />
            <Sidebar />
        </div>
    );
}

export default App;

import React from 'react';
import colors from '../theme/colors';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CustomScrollbar from '../components/CustomScrollbar';
import AboutMe from '../components/AboutMe';
import Main from '../components/Main';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementRect = element.getBoundingClientRect();
            window.scrollTo({
                top: elementRect.top + window.scrollY - 100,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div style={{ backgroundColor: colors.navy, minHeight: '100vh', color: colors.white }}>
            <Header scrollToSection={scrollToSection} />
            <CustomScrollbar />
            <Main />
            <AboutMe />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Sidebar />
            <Footer />
        </div>
    );
};

export default Home;
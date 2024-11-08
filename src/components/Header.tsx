// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import colors from '../theme/colors';

type HeaderProps = {
    scrollToSection: (id: string) => void;
};

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowHeader(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    if (!showHeader) return null;

    const handleCVDownload = () => {
        const link = document.createElement('a');
        link.href = '/path/to/CV.pdf';                                                      // TODO: Add the path to CV
        link.download = 'MateuszMaciaszczyk-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const isAtTop = lastScrollY === 0;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: `${colors.navy}CC`,
                boxShadow: isAtTop ? 'none' : '0px 4px 12px rgba(0, 0, 0, 0.3)',
                backdropFilter: isAtTop ? 'none' : 'blur(10px)',
                padding: '8px 0',
                transition: 'top 0.8s ease, background-color 0.8s ease, backdrop-filter 0.8s ease, opacity 0.8s ease',
                opacity: showHeader ? 1 : 0,
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    variant="h5"
                    sx={{ color: colors.green, fontWeight: 'bold', cursor: 'pointer' }}
                    onClick={scrollToTop}
                >
                    MateuszMaciaszczyk._
                </Typography>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    {[
                        { label: 'about', id: 'about' },
                        { label: 'experience', id: 'experience' },
                        { label: 'skills', id: 'skills' },
                        { label: 'projects', id: 'projects' },
                        { label: 'contact', id: 'contact' },
                    ].map((item) => (
                        <Button
                            key={item.id}
                            color="inherit"
                            onClick={() => scrollToSection(item.id)}
                            sx={{
                                textTransform: 'none',
                                color: colors.lightestSlate,
                                '&:hover': {
                                    color: colors.green,
                                },
                            }}
                        >
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <span style={{ color: colors.green, marginRight: '0.5em' }}>//</span> {item.label}
                        </Button>
                    ))}
                    <Button
                        color="inherit"
                        onClick={handleCVDownload}
                        sx={{
                            textTransform: 'none',
                            color: colors.green,
                            marginRight: '1rem',
                            border: `1px solid ${colors.green}`,
                            '&:hover': {
                                backgroundColor: colors.green,
                                color: 'white',
                            },
                        }}
                    >
                        Resume
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

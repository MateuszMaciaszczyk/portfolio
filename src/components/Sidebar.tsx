import React from 'react';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Link } from '@mui/material';
import colors from '../theme/colors';

const socialLinks = [
    { href: 'https://github.com/MateuszMaciaszczyk', icon: <GitHub /> },
    { href: 'https://www.linkedin.com/in/mateusz-maciaszczyk-5621542b8/', icon: <LinkedIn /> },
    { href: 'https://www.instagram.com/mateusz_maciaszczyk/', icon: <Instagram /> },
];

const Sidebar: React.FC = () => {
    return (
        <>
            {/* Left Sidebar */}
            <Box
                sx={{
                    position: 'fixed',
                    left: 20,
                    bottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    marginLeft: 2,
                }}
            >
                {socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: colors.slate,
                            '&:hover': { color: colors.green },
                        }}
                    >
                        <IconButton sx={{ color: 'inherit' }}>{link.icon}</IconButton>
                    </Link>
                ))}
                <Box
                    sx={{
                        width: 0.05,
                        height: 100,
                        backgroundColor: colors.lightestSlate,
                        marginTop: 1,
                        borderRadius: '10px',
                    }}
                />
            </Box>

            {/* Right Sidebar (Email) */}
            <Box
                sx={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    marginRight: 2,
                }}
            >
                <Link
                    href="mailto:mateusz.maciaszczykf@gmail.com"
                    sx={{
                        writingMode: 'vertical-rl',
                        color: colors.slate,
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        letterSpacing: '0.1rem',
                        '&:hover': { color: colors.green },
                    }}
                >
                    mateusz.maciaszczykf@gmail.com
                </Link>
                <Box
                    sx={{
                        width: 0.05,
                        height: 100,
                        backgroundColor: colors.lightestSlate,
                        marginTop: 1,
                        borderRadius: '10px',
                    }}
                />
            </Box>
        </>
    );
};

export default Sidebar;

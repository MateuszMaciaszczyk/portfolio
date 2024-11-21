import React from 'react';
import { Box, Typography, Avatar, Divider } from '@mui/material';
import colors from '../theme/colors';
import profileImage from '../images/foto.jpg';

const AboutMe: React.FC = () => {
    return (
        <Box
            id="about"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: '4rem 2rem',
                maxWidth: '60%',
                margin: '0 auto',
                color: colors.lightSlate,
            }}
        >
            <Box sx={{ flex: 1, marginRight: { md: '2rem' } }}>
                <Typography variant="h4" sx={{ color: colors.green, marginBottom: '1rem' }}>
                    01. About Me
                </Typography>
                <Divider sx={{ marginBottom: '1.5rem', backgroundColor: colors.lightestSlate, opacity: 0.3 }} />
                <Typography paragraph sx={{ marginBottom: '1rem' }}>
                    Hello! My name is Mateusz and I'm CS student at AGH UST in Cracow.
                </Typography>
                <Typography paragraph sx={{ marginBottom: '1rem' }}>
                    I’ve always been fascinated by technology – by how coding can shape reality. At AGH, I discovered
                    that backend development is my place – it’s where the real
                    “magic” of applications happens, the part users often don’t see but without which no tool could
                    work. I’ve mastered Python, Java, and Spring, essential tools for building efficient backend
                    applications, as well as cloud technologies, databases, and front-end development with
                    React and TypeScript.
                </Typography>
                <Typography paragraph sx={{ marginBottom: '1rem' }}>
                    For me, programming is more than just writing code. It’s about collaboration, striving for
                    perfection, and finding solutions that truly work. Every project presents new challenges and
                    lessons – both technical and personal. Every day, I look for inspiration to create applications
                    that bridge technology with real human needs.
                </Typography>
                <Typography paragraph sx={{ marginBottom: '1rem' }}>
                    Beyond programming, I value an active lifestyle. I spend my free time hiking in the mountains and
                    skiing on the slopes. Sports are a great way for me to maintain balance between work and relaxation
                    and to recharge for the next set of challenges!
                </Typography>
            </Box>

            {/* Right Section: Avatar */}
            <Box
                sx={{
                    maxWidth: '27%',
                    marginTop: '5rem',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-10px)',
                    },
                }}>
                <Avatar
                    src={profileImage}
                    alt="Profile"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        backgroundColor: colors.green,
                        padding: '0.5rem',
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.3s ease',
                        '&:hover': {
                            filter: 'none',
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default AboutMe;

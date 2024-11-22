import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import colors from '../theme/colors';

const Contact: React.FC = () => {
    const handleSendEmail = () => {
        window.location.href = 'mailto:mateusz.maciaszczykf@gmail.com';
    };

    return (
        <Box
            id="contact"
            sx={{
                padding: '4rem 2rem',
                textAlign: 'center',
                color: colors.lightSlate,
                backgroundColor: colors.navy,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '15rem',
                marginBottom: '10rem',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: colors.green,
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                }}
            >
                Get In Touch
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    color: colors.lightestSlate,
                }}
            >
                Whether you want to collaborate on a project, have a question, or just want to say
                hello, feel free to get in touch! I'm always happy to hear from you.
            </Typography>

            <Button
                variant="outlined"
                onClick={handleSendEmail}
                sx={{
                    textTransform: 'none',
                    color: colors.green,
                    borderColor: colors.green,
                    padding: '0.8rem 2rem',
                    fontSize: '1.1rem',
                    '&:hover': {
                        backgroundColor: colors.green,
                        color: colors.navy,
                    },
                }}
            >
                Send Email
            </Button>
        </Box>
    );
};

export default Contact;

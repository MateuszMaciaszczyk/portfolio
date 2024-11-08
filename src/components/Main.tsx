import colors from "../theme/colors";
import {Box, Typography} from "@mui/material";
import React from "react";

const Main: React.FC = () => {
    return (
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
        <Typography variant="h5" sx={{fontSize: '2rem', marginBottom: '1rem', color: colors.green}}>
            Hi, my name is
        </Typography>
        <Typography variant="h1"
                    sx={{fontWeight: 'bold', fontSize: '8rem', marginBottom: '1rem', color: colors.lightestSlate}}>
            Mateusz Maciaszczyk
        </Typography>
        <Typography variant="h3"
                    sx={{fontWeight: 'bold', letterSpacing: '0.1rem', fontSize: '2rem', color: colors.slate}}>
            SOFTWARE ENGINEER, BACK END & APP DEVELOPER.
        </Typography>
    </Box>
    )
}

export default Main;
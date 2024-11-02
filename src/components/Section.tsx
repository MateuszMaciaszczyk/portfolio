// src/components/Section.tsx
import React from 'react';
import { Box } from '@mui/material';

type SectionProps = {
    id: string;
    backgroundColor: string;
};

const Section: React.FC<SectionProps> = ({ id, backgroundColor }) => (
    <Box id={id} sx={{ minHeight: '100vh', backgroundColor, padding: '20px' }} />
);

export default Section;

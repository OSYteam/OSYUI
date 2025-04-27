import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface MainContentLayoutProps {
    children: ReactNode;
}

const MainContentLayout = ({ children }: MainContentLayoutProps) => {
    return (
        <Box sx={{ display: 'flex', bgcolor: "red" }}>
            {children}
        </Box>
    );
};

export default MainContentLayout;

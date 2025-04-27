import { Box } from '@mui/material';
import { ReactNode } from 'react';
import ContentFilterer from '../../../common/components/contentFilterer/ContentFilterer';

interface MainContentLayoutProps {
    children: ReactNode;
}

const MainContentLayout = ({ children }: MainContentLayoutProps) => {
    return (
        <Box
            flexDirection="column"
            sx={{
                display: 'flex',
                bgcolor: "red",
            }}>

            <ContentFilterer />
            {children}
        </Box>
    );
};

export default MainContentLayout;

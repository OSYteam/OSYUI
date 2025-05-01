import { Box } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import ContentFilterer from '../../../common/components/contentFilterer/ContentFilterer';
import orders from '../mock/orders';
import filterOptions from '../../../common/components/contentFilterer/mock/filterOptions';
import { Order } from '../types/CustomOrderTypes';

interface MainContentLayoutProps {
    children: ReactNode;
}

const MainContentLayout = ({ children }: MainContentLayoutProps) => {

    const [orderData, setOrderData] = useState<Order[]>(orders);

    useEffect(() => {

    }, [orderData])

    return (
        <Box
            flexDirection="column"
            sx={{
                display: 'flex',
            }}>

            <ContentFilterer
                itemsForFiltering={orders}
                filterOptions={filterOptions}
                // setResult={(filteredOrders) => { setOrderData(filteredOrders) }}
                setResult={(filteredOrders) => { console.log(filteredOrders) }}
            />
            {children}
        </Box>
    );
};

export default MainContentLayout;

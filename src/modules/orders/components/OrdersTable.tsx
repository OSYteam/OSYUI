import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Typography,
} from '@mui/material';

type Platform = 'yemeksepeti' | 'getir' | 'trendyol' | 'migros' | 'all';

export interface Order {
    id: string;
    platform: Platform;
    orderNumber: string;
    customerName: string;
    amount: number;
    status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
    time: string;
}

interface OrdersTableProps {
    orders: Order[];
    onOrderClick?: (order: Order) => void;
}

const OrdersTable: FC<OrdersTableProps> = ({ orders, onOrderClick }) => {
    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'pending': return 'warning';
            case 'preparing': return 'info';
            case 'ready': return 'success';
            case 'delivered': return 'default';
            case 'cancelled': return 'error';
            default: return 'default';
        }
    };

    const getStatusText = (status: Order['status']) => {
        switch (status) {
            case 'pending': return 'Bekliyor';
            case 'preparing': return 'Hazırlanıyor';
            case 'ready': return 'Hazır';
            case 'delivered': return 'Teslim Edildi';
            case 'cancelled': return 'İptal';
            default: return status;
        }
    };

    const getPlatformColor = (platform: Platform) => {
        switch (platform) {
            case 'yemeksepeti': return '#ff0000';
            case 'getir': return '#5d3ebc';
            case 'trendyol': return '#f27a1a';
            case 'migros': return '#ff6600';
            default: return '#666';
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Sipariş No</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Platform</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Müşteri</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Tutar</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Durum</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Saat</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                                <Typography variant="body2" color="text.secondary">
                                    Sipariş bulunamadı
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ) : (
                        orders.map((order) => (
                            <TableRow
                                key={order.id}
                                sx={{
                                    '&:hover': { backgroundColor: '#f9f9f9' },
                                    cursor: 'pointer'
                                }}
                                onClick={() => onOrderClick?.(order)}
                            >
                                <TableCell>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        {order.orderNumber}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={order.platform.charAt(0).toUpperCase() + order.platform.slice(1)}
                                        size="small"
                                        sx={{
                                            backgroundColor: getPlatformColor(order.platform),
                                            color: '#fff',
                                            fontWeight: 500,
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{order.customerName}</TableCell>
                                <TableCell>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        ₺{order.amount.toFixed(2)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={getStatusText(order.status)}
                                        color={getStatusColor(order.status)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" color="text.secondary">
                                        {order.time}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OrdersTable;

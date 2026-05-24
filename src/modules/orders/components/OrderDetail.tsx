import { FC } from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Divider,
    Chip,
    Paper,
    Stack,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Order } from './OrdersTable';

interface OrderDetailProps {
    order: Order | null;
    open: boolean;
    onClose: () => void;
}

const OrderDetail: FC<OrderDetailProps> = ({ order, open, onClose }) => {
    if (!order) return null;

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

    const getPlatformColor = (platform: string) => {
        switch (platform) {
            case 'yemeksepeti': return '#ff0000';
            case 'getir': return '#5d3ebc';
            case 'trendyol': return '#f27a1a';
            case 'migros': return '#ff6600';
            default: return '#666';
        }
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '40%',
                    minWidth: '400px',
                    maxWidth: '600px',
                },
            }}
        >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Sipariş Detayı
                    </Typography>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
                    {/* Order Number & Platform */}
                    <Paper sx={{ p: 2, mb: 3, backgroundColor: '#f5f5f5' }}>
                        <Stack spacing={1}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Sipariş No
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {order.orderNumber}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Platform
                                </Typography>
                                <Chip
                                    label={order.platform.charAt(0).toUpperCase() + order.platform.slice(1)}
                                    size="small"
                                    sx={{
                                        backgroundColor: getPlatformColor(order.platform),
                                        color: '#fff',
                                        fontWeight: 500,
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Paper>

                    {/* Status */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Durum
                        </Typography>
                        <Chip
                            label={getStatusText(order.status)}
                            color={getStatusColor(order.status)}
                            sx={{ fontWeight: 500 }}
                        />
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Customer Info */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Müşteri Bilgileri
                        </Typography>
                        <Paper sx={{ p: 2 }}>
                            <Stack spacing={1.5}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Ad Soyad
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        {order.customerName}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Telefon
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        +90 555 123 45 67
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Adres
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>
                                        Atatürk Mah. İstiklal Cad. No:123 Kadıköy/İstanbul
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Order Items */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Sipariş Kalemleri
                        </Typography>
                        <Paper sx={{ p: 2 }}>
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            Hamburger Menü x2
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            Ekstra peynir, ketçap
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        ₺85.00
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            Coca Cola x1
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            330ml
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        ₺15.00
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            Patates Kızartması x1
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            Büyük boy
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        ₺25.50
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Order Summary */}
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Sipariş Özeti
                        </Typography>
                        <Paper sx={{ p: 2, backgroundColor: '#f9f9f9' }}>
                            <Stack spacing={1}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Ara Toplam
                                    </Typography>
                                    <Typography variant="body2">
                                        ₺{order.amount.toFixed(2)}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Teslimat Ücreti
                                    </Typography>
                                    <Typography variant="body2">
                                        ₺10.00
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        Toplam
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                                        ₺{(order.amount + 10).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Box>

                    {/* Time */}
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            Sipariş Saati: {order.time}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};

export default OrderDetail;

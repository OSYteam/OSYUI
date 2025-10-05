import { useState } from 'react'
import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import VariantForm from './VariantForm'
import { GoPlus } from 'react-icons/go'
import { CreateProductDto, CreateProductVariantDto } from '../dto/CreateProductDto'

import Backdrop from '@mui/material/Backdrop';
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../../../../common/components/LoadingSpinner'
import { useAuthStore } from '../../../../auth/store/authStore'
import { createProduct, uploadVariantImage } from '../../../service/seller.service'
import { useProductStore } from '../../../store/productStore'



function CreateProduct() {
    const [variantForms, setVariantForms] = useState<number[]>([])
    const [variants, setVariants] = useState<CreateProductVariantDto[]>([]);
    const [variantImages, setVariantImages] = useState<(File | null)[]>([]);

    const [loading, setLoading] = useState(false);

    const { appendProduct } = useProductStore();

    const navigate = useNavigate();

    const { accessToken } = useAuthStore();

    const [productData, setProductData] = useState({
        name: '',
        desc: '',
        discount: 0
    });


    const handleAddVariant = () => {
        const newId = Date.now();
        setVariantForms(prev => [...prev, newId]);
        setVariants(prev => [...prev, {
            stock: 0,
            price: 0,
            status: 0,
            attributes: [],
            imageUrl: ''
        }]);

        setVariantImages(prev => [...prev, null]);
    }

    const handleVariantChange = (id: number, data: CreateProductVariantDto) => {
        const index = variantForms.findIndex(vId => vId === id);
        if (index !== -1) {
            const newVariants = [...variants];
            newVariants[index] = data;
            setVariants(newVariants);
        }
    };

    const handleRemoveVariant = (id: number) => {
        const index = variantForms.findIndex(vId => vId === id);
        if (index !== -1) {
            setVariantForms(prev => prev.filter(vId => vId !== id));
            setVariants(prev => prev.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = async () => {

        setLoading(true);

        const payload: CreateProductDto = {
            name: productData.name,
            desc: productData.desc,
            discount: productData.discount,
            variants: variants
        };

        try {
            const response = await createProduct(accessToken, payload);

            if (response.variants && response.variants.length > 0) {
                await Promise.all(
                    response.variants.map(async (variant, index) => {
                        const file = variantImages[index];
                        if (file) {
                            try {
                                await uploadVariantImage(accessToken, variant.id, file);
                            } catch (err) {
                                console.error(`Varyant ${variant.id} için görsel yüklenemedi`, err);
                            }
                        }
                    })
                );
            }

            setLoading(false);
            appendProduct(response);
            navigate('/seller');

        } catch (err) {
            console.error("Ürün oluşturma hatası:", err);
        }
    };


    return (
        <Box sx={{ width: '100%', p: 3 }}>
            <Typography variant='h4'>Ürün Ekle</Typography>

            <Stack direction="row" spacing={4} alignItems="center" sx={{ mt: 4 }}>

                {/* Sol: Ürün Bilgileri */}
                <Stack spacing={3}>
                    <TextField
                        label="Ad"
                        variant="outlined"
                        value={productData.name}
                        onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                        InputLabelProps={{
                            sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                        }}
                        sx={{
                            width: '500px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'black' },
                                '&:hover fieldset': { borderColor: 'black' },
                                '&.Mui-focused fieldset': { borderColor: 'black' },
                            },
                            input: { color: 'black' },
                        }}
                    />
                    <TextField
                        label="Ürün Açıklaması"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={productData.desc}
                        onChange={(e) => setProductData({ ...productData, desc: e.target.value })}
                        InputLabelProps={{
                            sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                        }}
                        sx={{
                            width: '500px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'black' },
                                '&:hover fieldset': { borderColor: 'black' },
                                '&.Mui-focused fieldset': { borderColor: 'black' },
                            },
                            input: { color: 'black' },
                        }}
                    />

                    <TextField
                        label="İndirim"
                        type="number"
                        variant="outlined"
                        value={productData.discount}
                        onChange={(e) => setProductData({ ...productData, discount: Number(e.target.value) })}
                        sx={{
                            width: '100px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'black' },
                                '&:hover fieldset': { borderColor: 'black' },
                                '&.Mui-focused fieldset': { borderColor: 'black' },
                            },
                            input: { color: 'black' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                        }}
                    />

                </Stack>

            </Stack>

            <Stack spacing={3} sx={{ mt: 4 }}>
                {variantForms.map(id => (
                    <VariantForm key={id}
                        id={id}
                        onChange={handleVariantChange}
                        onRemove={handleRemoveVariant}
                        onImageChange={(id, file) => {
                            const index = variantForms.findIndex(vId => vId === id);
                            if (index !== -1) {
                                setVariantImages(prev => {
                                    const newImages = [...prev];
                                    newImages[index] = file;
                                    return newImages;
                                });
                            }
                        }}
                    />
                ))}

                <Button
                    variant="contained"
                    color='secondary'
                    sx={{
                        width: '200px',
                        bgcolor: "purple",
                        color: "white",
                        "&:hover": {
                            bgcolor: "#b300b3",
                        },
                    }}
                    startIcon={<GoPlus />}
                    onClick={handleAddVariant}
                >
                    Varyant Ekle
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Ürünü Kaydet
                </Button>
            </Stack>

            <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <LoadingSpinner size={50} text="Lütfen bekleyin, ürün kaydediliyor..." />
            </Backdrop>

        </Box>
    )


}

export default CreateProduct

import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { UpdateProductDto } from "../dto/UpdateProductVariantDto";
import { useAuthStore } from "../../../auth/store/authStore";
import { updateProduct } from "../../service/seller.service";

interface UpdateProductProps {
    open: boolean;
    onClose: () => void;
    product?: {
        id: string;
        name: string;
        desc: string;
        discount: number;
    };
}

const UpdateProduct: React.FC<UpdateProductProps> = ({ open, onClose, product }) => {
    const [name, setName] = useState(product?.name ?? "");
    const [desc, setDesc] = useState(product?.desc ?? "");
    const [discount, setDiscount] = useState(product?.discount ?? 0);

    const { accessToken } = useAuthStore();

    useEffect(() => {
        if (product) {
            setName(product.name ?? "");
            setDesc(product.desc ?? "");
            setDiscount(product.discount ?? 0);
        } else {
            setName("");
            setDesc("");
            setDiscount(0);
        }
    }, [product]);

    const handleSave = async () => {
        const dto: UpdateProductDto = {
            name,
            desc,
            discount,
        };

        if (product)
            await updateProduct(accessToken, product?.id, dto);

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Ürün Güncelle</DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    <TextField
                        label="Ürün Adı"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Açıklama"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        fullWidth
                        multiline
                        rows={3}
                    />
                    <TextField
                        label="İndirim (%)"
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(Number(e.target.value))}
                        fullWidth
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="inherit">
                    İptal
                </Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    Kaydet
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateProduct;

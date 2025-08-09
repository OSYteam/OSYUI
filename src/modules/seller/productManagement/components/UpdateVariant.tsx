import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
    Stack,
    IconButton,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

import { ProductStatus } from "../enum/productStatus";
import { VariantAttributeResponseDto } from "../dto/ProducResponseDto";
import { AttributeOptions } from "../../../../common/enums/Attributes";
import { UpdateProductVariantDto } from "../dto/UpdateProductVariantDto";

interface UpdateVariantProps {
    open: boolean;
    onClose: () => void;
    variant?: {
        id: string;
        price: number;
        stock: number;
        status: ProductStatus;
        attributes: VariantAttributeResponseDto[];
        imageUrl?: string;
    };
    onSave: (dto: UpdateProductVariantDto) => Promise<void>;
}

const UpdateVariant: React.FC<UpdateVariantProps> = ({ open, onClose, variant, onSave }) => {
    const [price, setPrice] = useState(variant?.price ?? 0);
    const [stock, setStock] = useState(variant?.stock ?? 0);
    const [status, setStatus] = useState(variant?.status ?? ProductStatus.AVAILABLE);
    const [attributes, setAttributes] = useState<VariantAttributeResponseDto[]>(variant?.attributes ?? []);

    useEffect(() => {
        if (variant) {
            setPrice(variant.price);
            setStock(variant.stock);
            setStatus(variant.status);
            setAttributes(variant.attributes || []);
        } else {
            setPrice(0);
            setStock(0);
            setStatus(ProductStatus.AVAILABLE);
            setAttributes([]);
        }
    }, [variant]);

    const handleAttributeTypeChange = (index: number, newType: number) => {
        const optionGroup = AttributeOptions.find(opt => opt.value === newType);
        const updated = attributes.map((attr, i) => i === index
            ? {
                ...attr,
                attributeName: newType.toString(),
                attributeValue: optionGroup?.values[0]?.value.toString() ?? "",
            }
            : attr);
        setAttributes(updated);
    };

    const handleAttributeValueChange = (index: number, newValue: string) => {
        const updated = attributes.map((attr, i) => i === index ? { ...attr, attributeValue: newValue } : attr);
        setAttributes(updated);
    };


    const handleDeleteAttribute = (index: number) => {
        const updated = [...attributes];
        updated.splice(index, 1);
        setAttributes(updated);
    };

    const handleAddAttribute = () => {
        setAttributes((prev) => [
            ...prev,
            {
                attributeName: AttributeOptions[0].value.toString(),
                attributeValue: AttributeOptions[0].values[0]?.value.toString() || "",
            },
        ]);
    };

    const handleSave = async () => {
        const dto: UpdateProductVariantDto = {
            id: variant?.id,
            price,
            status,
            stock,
            attributes: attributes.map(attr => ({
                attribute: Number(attr.attributeName),
                attributeVal: Number(attr.attributeValue),
            })),
        };

        console.log(dto);
        await onSave(dto);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Varyant Düzenle</DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    <TextField
                        label="Fiyat"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        fullWidth
                    />
                    <TextField
                        label="Stok"
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(Number(e.target.value))}
                        fullWidth
                    />
                    <TextField
                        label="Durum"
                        select
                        value={status}
                        onChange={(e) => setStatus(Number(e.target.value))}
                        fullWidth
                    >
                        <MenuItem value={ProductStatus.AVAILABLE}>Mevcut</MenuItem>
                        <MenuItem value={ProductStatus.UNAVAILABLE}>Mevcut Değil</MenuItem>
                        <MenuItem value={ProductStatus.OUT_OF_STOCK}>Stokta Yok</MenuItem>
                    </TextField>

                    <Stack spacing={1}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <strong>Özellikler</strong>
                            <Button variant="outlined" color="error" size="small" onClick={handleAddAttribute}>
                                + Yeni Özellik Ekle
                            </Button>
                        </Stack>

                        {attributes.length === 0 && <em>Özellik bulunmamaktadır.</em>}

                        {attributes.map((attr, index) => {
                            const typeNum = Number(attr.attributeName);
                            const optionGroup = AttributeOptions.find((opt) => opt.value === typeNum);

                            return (
                                <Stack
                                    key={index}
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    sx={{ mt: 0.5 }}
                                >
                                    <TextField
                                        select
                                        label="Tür"
                                        value={typeNum}
                                        onChange={(e) => handleAttributeTypeChange(index, Number(e.target.value))}
                                        sx={{ minWidth: 140 }}
                                        size="small"
                                    >
                                        {AttributeOptions.map((opt) => (
                                            <MenuItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        select
                                        label="Değer"
                                        value={attr.attributeValue}
                                        onChange={(e) => handleAttributeValueChange(index, e.target.value)}
                                        sx={{ minWidth: 140 }}
                                        size="small"
                                    >
                                        {(optionGroup?.values ?? []).map((val) => (
                                            <MenuItem key={val.value} value={val.value.toString()}>
                                                {val.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <IconButton
                                        aria-label="Sil"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDeleteAttribute(index)}
                                    >
                                        <MdDelete />
                                    </IconButton>
                                </Stack>
                            );
                        })}
                    </Stack>
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

export default UpdateVariant;

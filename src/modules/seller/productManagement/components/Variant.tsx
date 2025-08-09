import { TableRow, TableCell, Stack, Button, Chip, Backdrop } from '@mui/material';
import { Fragment, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdColorLens, MdDelete } from 'react-icons/md';
import ProductStatusCell from './ProductStatusCell';
import { ProductVariantResponseDto } from '../../../../common/dto/ProductResponseDto';
import { HttpStatusCode } from 'axios';
import { deleteVariant, updateVariant } from '../../service/seller.service';
import { useAuthStore } from '../../../auth/store/authStore';
import { AttributeOptions } from '../../../../common/enums/Attributes';

import { FaRulerCombined, FaTshirt, FaWeightHanging } from 'react-icons/fa';
import UpdateVariant from './UpdateVariant';
import { UpdateProductVariantDto } from '../dto/UpdateProductVariantDto';
import { useProductStore } from '../../store/productStore';
import LoadingSpinner from '../../../../common/components/LoadingSpinner';

const domainPath = "http://srv895462.hstgr.cloud";
interface variantProps {
    dto: ProductVariantResponseDto;
    productId: string;
}


function Variant({ dto, productId }: variantProps) {

    const [openEdit, setOpenEdit] = useState(false);

    const [spinner, setSpinner] = useState(false);

    const { id, price, status, stock, imageUrl, attributes } = dto;

    const getAttributeIcon = (label?: string) => {
        switch (label) {
            case "Beden": return <FaTshirt size={14} />;
            case "Renk": return <MdColorLens size={14} />;
            case "Uzunluk": return <FaRulerCombined size={14} />;
            case "Ağırlık": return <FaWeightHanging size={14} />;
            default: return undefined;
        }
    };


    const { accessToken } = useAuthStore();
    const { replaceVariantInProduct, removeVariantFromProduct } = useProductStore();

    const handleDeleteVariant = async (variantId: string) => {

        setSpinner(true);
        try {

            const status = await deleteVariant(accessToken, variantId);
            if (status === HttpStatusCode.Ok)
                removeVariantFromProduct(productId, variantId);

            setSpinner(false);
        } catch (error) {
            console.error("Variant Silme Hatası:", error);
        }
    };

    const handleUpdateVariant = async (dto: UpdateProductVariantDto) => {
        setSpinner(true);

        try {
            const response = await updateVariant(accessToken, dto);
            if (response) {
                replaceVariantInProduct(productId, response);
            }

        } catch (error) {
            console.error("Variant Update Hatası: ", error)
        } finally {
            setSpinner(false);
        }
    };

    return (
        <Fragment>

            <Backdrop open={spinner} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <LoadingSpinner size={50} text="Lütfen bekleyin, ürün kaydediliyor..." color="#fff" />
            </Backdrop>


            <TableRow key={id}>
                <TableCell>
                    <img
                        src={`${domainPath}/${imageUrl}`}
                        style={{ width: "70px", borderRadius: "8px" }}
                    />
                </TableCell>
                <TableCell>{price}₺</TableCell>
                <TableCell>{stock} adet</TableCell>
                <TableCell>
                    <ProductStatusCell status={status} />
                </TableCell>

                {/* Attributes */}
                <TableCell>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {attributes && attributes.length > 0 ? (
                            attributes.map((attr, index) => {
                                const typeNum = Number(attr.attributeName);
                                const valueNum = isNaN(Number(attr.attributeValue))
                                    ? attr.attributeValue
                                    : Number(attr.attributeValue);

                                const optionGroup = AttributeOptions.find(opt => opt.value === typeNum);
                                const valueLabel = optionGroup?.values.find(v => v.value === valueNum)?.label
                                    ?? attr.attributeValue;

                                const icon = getAttributeIcon(optionGroup?.label);

                                return (
                                    <Chip
                                        key={index}
                                        icon={icon}
                                        label={`${valueLabel}`}
                                        size="small"
                                        sx={{
                                            fontWeight: 500,
                                            borderRadius: "12px",
                                            background: "linear-gradient(135deg, #f0f0f0, #e0e0e0)",
                                            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                                            "& .MuiChip-icon": {
                                                color: "#555"
                                            },
                                            "& .MuiChip-label": {
                                                paddingX: 1.2
                                            },
                                            transition: "all 0.2s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-1px)",
                                                boxShadow: "0 3px 6px rgba(0,0,0,0.18)"
                                            }
                                        }}
                                    />
                                );
                            })
                        ) : (
                            <Chip label="-" size="small" variant="outlined" />
                        )}
                    </Stack>
                </TableCell>

                {/* Actions */}
                <TableCell>
                    <Stack direction="row" spacing={1}>
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<CiEdit />}
                            onClick={() => setOpenEdit(true)}
                            sx={{
                                textTransform: "none",
                                bgcolor: "#1976d2",
                                color: "#fff",
                                borderRadius: "8px",
                                boxShadow: 1,
                                "&:hover": { bgcolor: "#1565c0" },
                            }}
                        >
                            Düzenle
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<MdDelete />}
                            onClick={() => handleDeleteVariant(id)}
                            sx={{
                                textTransform: "none",
                                bgcolor: "#d32f2f",
                                color: "#fff",
                                borderRadius: "8px",
                                boxShadow: 1,
                                "&:hover": { bgcolor: "#b71c1c" },
                            }}
                        >
                            Sil
                        </Button>
                    </Stack>
                </TableCell>
            </TableRow>
            <UpdateVariant
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                onSave={handleUpdateVariant}
                variant={{
                    id,
                    price,
                    status,
                    stock,
                    attributes: attributes ?? [],
                    imageUrl
                }}
                loading={spinner}
            />



        </Fragment>
    );
}

export default Variant;

import { Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Stack, Button, Typography, Box, Collapse } from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { HttpStatusCode } from "axios";
import Variant from "./Variant";
import UpdateVariant from "./UpdateVariant";
import UpdateProduct from "./UpdateProduct";
import { ConfirmDialogResult, ConfirmDialog } from "../../../../../common/components/ConfirmDialog";
import { useAuthStore } from "../../../../auth/store/authStore";
import { deleteProduct } from "../../../service/seller.service";
import { useProductStore } from "../../../store/productStore";

const ProductList = () => {

    const domainPath = "http://srv895462.hstgr.cloud";

    const [openProductId, setOpenProductId] = useState<string | null>(null);

    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const [dialogOpen, dialogSetOpen] = useState(false);

    const { products, removeProductById: dropProduct } = useProductStore();
    const { accessToken } = useAuthStore();

    const [openCreate, setOpenCreate] = useState(false);

    const [openEdit, setOpenEdit] = useState(false);

    const toggleRow = (productId: string) => {
        setOpenProductId(openProductId === productId ? null : productId);
    };

    const handleDialogResult = (result: ConfirmDialogResult) => {
        dialogSetOpen(false);
        switch (result) {
            case "confirm":
                if (selectedProduct)
                    handleDeleteProduct(selectedProduct);
                break;
            case "cancel":
                break;
            case "close":
                break;
        }
    };

    const handleOpenEdit = (productId: string) => {
        setSelectedProduct(productId);
        setOpenEdit(true);
    }

    const handleOpenCreateVariant = (productId: string) => {
        setSelectedProduct(productId);
        setOpenCreate(true);
    };

    const handleDeleteProduct = async (productId: string) => {
        try {
            const response = await deleteProduct(accessToken, productId);

            if (response === HttpStatusCode.Ok)
                dropProduct(productId);
        } catch (error) {
            console.error("Delete Product ERror:", error);
        }
    }



    return (
        <Paper elevation={3} sx={{ width: '100%', overflowX: "auto" }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ bgcolor: "#f0f0f0" }}>
                        <TableCell />
                        <TableCell>Görsel</TableCell>
                        <TableCell>Ürün Adı</TableCell>
                        <TableCell>Açıklama</TableCell>
                        <TableCell>Indirim</TableCell>
                        {/* <TableCell>Stok</TableCell> */}
                        <TableCell>Aksiyonlar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <React.Fragment key={product.id}>
                            <TableRow hover sx={{ cursor: "pointer" }}>
                                <TableCell onClick={() => toggleRow(product.id)}>
                                    <IconButton size="small">
                                        {openProductId === product.id ? (
                                            <FiChevronUp size={18} />
                                        ) : (
                                            <FiChevronDown size={18} />
                                        )}
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <img
                                        src={`${domainPath}/${product.variants?.find(v => v.imageUrl)?.imageUrl}`}
                                        alt={product.name}
                                        style={{ width: "70px", borderRadius: "8px" }}
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell sx={{ maxWidth: 200 }}>{product.desc}</TableCell>
                                <TableCell>{product.discount}%</TableCell>

                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<CiEdit />}
                                            onClick={() => handleOpenEdit(product.id)}
                                            sx={{
                                                textTransform: "none",
                                                bgcolor: "#1976d2",
                                                color: "#fff",
                                                borderRadius: "8px",
                                                boxShadow: 1,
                                                "&:hover": {
                                                    bgcolor: "#1565c0",
                                                },
                                            }}
                                        >
                                            Düzenle
                                        </Button>

                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<MdDelete />}
                                            onClick={() => {
                                                setSelectedProduct(product.id)
                                                dialogSetOpen(true);
                                            }}
                                            sx={{
                                                textTransform: "none",
                                                bgcolor: "#d32f2f",
                                                color: "#fff",
                                                borderRadius: "8px",
                                                boxShadow: 1,
                                                "&:hover": {
                                                    bgcolor: "#b71c1c",
                                                },
                                            }}
                                        >
                                            Sil
                                        </Button>

                                        <ConfirmDialog
                                            open={dialogOpen}
                                            onResult={handleDialogResult}
                                            title="Ürünü Silmek Üzeresiniz"
                                            description="Bu işlem kalıcıdır ve geri alınamaz. Devam etmek istediğinize emin misiniz?"
                                            confirmText="Evet, Sil"
                                            cancelText="İptal"
                                            maxWidth="md"
                                        />
                                    </Stack>
                                </TableCell>

                            </TableRow>

                            {/* Expandable Variant Row */}

                            <TableRow>
                                <TableCell colSpan={7} sx={{ p: 0, bgcolor: "#fafafa" }}>
                                    <Collapse in={openProductId === product.id} timeout="auto" unmountOnExit>
                                        <Box sx={{ px: 4, py: 2 }}>

                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="primary"
                                                    onClick={() => handleOpenCreateVariant(product.id)}
                                                    sx={{ textTransform: "none", borderRadius: "8px" }}
                                                >
                                                    + Varyant Ekle
                                                </Button>
                                            </Box>

                                            {product.variants && product.variants.length > 0 ? (
                                                <Table size="small">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Görsel</TableCell>
                                                            <TableCell>Fiyat</TableCell>
                                                            <TableCell>Stok</TableCell>
                                                            <TableCell>Durum</TableCell>
                                                            <TableCell>Özellikler</TableCell>
                                                            <TableCell>Aksiyonlar</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {product.variants.map((variant) => (
                                                            // <Variant
                                                            //     key={variant.id}
                                                            //     dto={variant}
                                                            //     productId={product.id}
                                                            // />
                                                            <></>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            ) : (
                                                <>
                                                    <Typography color="text.secondary">Varyant verisi bulunamadı.</Typography>
                                                    <Box sx={{ mt: 2 }}>
                                                        <Button variant="outlined" size="small" startIcon={<CiEdit />}>
                                                            Varyantları Düzenle
                                                        </Button>
                                                    </Box>
                                                </>

                                            )}
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>

                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>

            {selectedProduct && (
                <UpdateVariant
                    open={openCreate}
                    onClose={() => {
                        setOpenCreate(false);
                        setSelectedProduct(null);
                    }}
                    mode="create"
                    productId={selectedProduct}
                />
            )}

            {selectedProduct && (
                <UpdateProduct
                    open={openEdit}
                    onClose={() => {
                        setOpenEdit(false);
                        setSelectedProduct(null);
                    }}
                    product={products.find(p => p.id === selectedProduct)}
                />
            )}

        </Paper>

    );

};



export default ProductList;
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Chip, Stack, Collapse, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { mockProducts } from "../mock/products";
import ProductStatusCell from "./ProductStatusCell";

import { MdDelete } from "react-icons/md";

const ProductList = () => {

    const [openProductId, setOpenProductId] = useState<number | null>(null);

    const toggleRow = (productId: number) => {
        setOpenProductId(openProductId === productId ? null : productId);
    };

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
                        <TableCell>Stok</TableCell>
                        <TableCell>Aksiyonlar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockProducts.map((product) => (
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
                                        src={product.imageUrl}
                                        alt={product.name}
                                        style={{ width: "70px", borderRadius: "8px" }}
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell sx={{ maxWidth: 200 }}>{product.description}</TableCell>
                                <TableCell>{product.discount}%</TableCell>
                                <TableCell>
                                    <ProductStatusCell key={product.id} status={product.status} />
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<CiEdit />}
                                            onClick={() => console.log("Düzenle tıklandı")}
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
                                            onClick={() => console.log("Sil tıklandı")}
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
                                    </Stack>
                                </TableCell>

                            </TableRow>

                            {/* Expandable Variant Row */}
                            <TableRow>
                                <TableCell colSpan={7} sx={{ p: 0, bgcolor: "#fafafa" }}>
                                    <Collapse in={openProductId === product.id} timeout="auto" unmountOnExit>
                                        <Box sx={{ px: 4, py: 2 }}>
                                            {product.variants.length > 0 ? (
                                                <Table size="small">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Görsel</TableCell>
                                                            <TableCell>Varyant</TableCell>
                                                            <TableCell>Fiyat</TableCell>
                                                            <TableCell>Stok</TableCell>
                                                            <TableCell>Durum</TableCell>
                                                            <TableCell>Aksiyonlar</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {product.variants.map((variant) => (
                                                            <TableRow key={variant.id}>
                                                                <TableCell>  <img
                                                                    src={variant.imageUrl}
                                                                    alt={variant.variantValue}
                                                                    style={{ width: "70px", borderRadius: "8px" }}
                                                                />
                                                                </TableCell>
                                                                <TableCell>{variant.variantValue}</TableCell>
                                                                <TableCell>{variant.price}₺</TableCell>
                                                                <TableCell>{variant.stock} adet</TableCell>
                                                                <TableCell>
                                                                    <ProductStatusCell status={variant.status} />
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Stack direction="row" spacing={1}>
                                                                        <Button
                                                                            variant="contained"
                                                                            size="small"
                                                                            startIcon={<CiEdit />}
                                                                            onClick={() => console.log("Düzenle tıklandı")}
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
                                                                            onClick={() => console.log("Sil tıklandı")}
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
                                                                    </Stack>
                                                                </TableCell>
                                                            </TableRow>
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
        </Paper>
    );
};



export default ProductList;
import { TableRow, TableCell, Stack, Button } from '@mui/material'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import ProductStatusCell from './ProductStatusCell'
import { ProductVariantResponseDto } from '../../../../common/dto/ProductResponseDto'
import { HttpStatusCode } from 'axios'
import { deleteVariant } from '../../service/seller.service'
import { useAuthStore } from '../../../auth/store/authStore'


const domainPath = "http://srv895462.hstgr.cloud";


function Variant({ id, price, status, stock, imageUrl, attributes }: ProductVariantResponseDto) {

    const { accessToken } = useAuthStore();

    const handleDeleteVariant = async (variantId: string) => {
        const response = await deleteVariant(accessToken, variantId);
        console.log(response);

        // Variant silince store tarafında da sileceksin.

        if (response === HttpStatusCode.Ok)
            window.location.reload();
    }


    return (
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
                        onClick={() => handleDeleteVariant(id)}
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
    )
}

export default Variant

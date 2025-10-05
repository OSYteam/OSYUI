import React from 'react'
import { MdCheckCircle, MdWarning, MdCancel } from "react-icons/md";
import { ProductStatus } from "../enum/productStatus";
import { TableCell, Chip, Stack } from '@mui/material';



interface ProductStatusCellProps {
    status: ProductStatus
}

function ProductStatusCell(prop: ProductStatusCellProps) {

    const statusColors: Record<ProductStatus, string> = {
        [ProductStatus.AVAILABLE]: "green",
        [ProductStatus.UNAVAILABLE]: "orange",
        [ProductStatus.OUT_OF_STOCK]: "red",
    };


    const getStatusUI = (status: ProductStatus) => {
        switch (status) {
            case ProductStatus.AVAILABLE:
                return {
                    label: "Stokta Var",
                    icon: <MdCheckCircle size={18} style={{ marginRight: 4 }} />
                };

            case ProductStatus.UNAVAILABLE:
                return {
                    label: "Azalıyor",
                    icon: <MdWarning size={18} style={{ marginRight: 4 }} />
                };

            case ProductStatus.OUT_OF_STOCK:
                return {
                    label: "Stokta Yok",
                    icon: <MdCancel size={18} style={{ marginRight: 4 }} />
                };
            default:
                return {
                    label: "Bilinmiyor",
                    icon: null
                };
        }
    }

    const { label, icon } = getStatusUI(prop.status);



    return (
        <TableCell>
            <Chip
                label={
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        {icon}
                        <span>{label}</span>
                    </Stack>
                }
                variant="outlined"
                sx={{
                    fontWeight: 500,
                    borderColor: statusColors[prop.status],
                    color: statusColors[prop.status],
                }}
            />
        </TableCell>
    )
}

export default ProductStatusCell

import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    DialogProps,
} from "@mui/material";
import { MdWarningAmber } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export type ConfirmDialogResult = "confirm" | "cancel" | "close";

interface ConfirmDialogProps {
    open: boolean;
    onResult: (result: ConfirmDialogResult) => void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    icon?: React.ReactNode;
    maxWidth?: DialogProps["maxWidth"];
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    open,
    onResult,
    title = "Emin misiniz?",
    description = "Bu işlemi gerçekleştirmek üzeresiniz. Devam etmek istiyor musunuz?",
    confirmText = "Evet",
    cancelText = "Vazgeç",
    icon = <MdWarningAmber size={24} style={{ marginRight: 8, color: "#f44336" }} />,
    maxWidth = "sm",
}) => {
    return (
        <Dialog
            open={open}
            onClose={() => onResult("close")}
            fullWidth
            maxWidth={maxWidth}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    fontWeight="bold"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    {icon}
                    {title}
                </Typography>
                <IconButton onClick={() => onResult("close")}>
                    <IoClose />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Typography>{description}</Typography>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => onResult("cancel")} variant="outlined" color="inherit">
                    {cancelText}
                </Button>
                <Button onClick={() => onResult("confirm")} variant="contained" color="error">
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

import { Delete, Update } from "@mui/icons-material"
import {
    Box,
    CircularProgress,
    IconButton,
    Tooltip,
} from "@mui/material"
import { useState } from "react";
import { DialogModal } from "../../components/dialog";
import { useProduct } from "../../hook/useProduct";
import { UpdateModal } from "./modal/update";
import { AccordionProduct } from "../../components/Accordion";


export const Products = () => {

    const { dataProducts, loading, deleteProduct, updateProduct } = useProduct()

    const [openDeleteModal, setOpenDeleteModal] = useState({ open: false, id: null });
    const [openUpdateModal, setOpenUpdateModal] = useState({ open: false, id: null });


    const handleDeleteModalClose = () => {
        setOpenDeleteModal((data) => ({ ...data, open: false }))
    }

    const handleOpenModalDelete = (event, idModal) => {
        event.preventDefault();
        setOpenDeleteModal(() => ({ id: idModal, open: true }))
    }

    const handleUpdateModalClose = () => {
        setOpenUpdateModal((data) => ({ ...data, open: false }))
    }

    const handleOpenModalUpdate = (event, idModal) => {
        event.preventDefault();
        setOpenUpdateModal(() => ({ id: idModal, open: true }))
    }
    const handleUpdateProduct = (product) => {
        updateProduct(openUpdateModal.id, product)
        setOpenUpdateModal((data) => ({ ...data, open: false }))
    }

    const handleDeleteProduct = () => {
        deleteProduct(openDeleteModal.id)
        setOpenDeleteModal((data) => ({ ...data, open: false }))
    }

    if (loading) {
        return (
            <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <CircularProgress />
            </Box>
        )
    }

    return (
        <div>
            {dataProducts.map((product) => {
                return (
                    <AccordionProduct product={product} key={product._id}>
                        <Tooltip title='Deletar produto'>
                            <IconButton
                                color="error"
                                size="small"
                                onClick={(event) =>
                                    handleOpenModalDelete(event, product?._id)}
                            >
                                <Delete
                                    fontSize="small"
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Atualizar produto'>
                            <IconButton
                                color="success"
                                size="small"
                                onClick={(event) =>
                                    handleOpenModalUpdate(event, product?._id)}
                            >
                                <Update fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </AccordionProduct>

                )

            })

            }
            <DialogModal
                open={openDeleteModal.open}
                handleClose={handleDeleteModalClose}
                handleAccept={handleDeleteProduct}
                message={"Deseja deletar este produto?"}
            />
            <UpdateModal
                open={openUpdateModal.open}
                handleClose={handleUpdateModalClose}
                handleUpdate={handleUpdateProduct}
                id={openUpdateModal.id}

            />
        </div>
    )
}
import { Button, FormControl, Grid, Modal, TextField, } from "@mui/material"
import { useProduct } from "../../../../hook/useProduct";
import { useEffect, useState } from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
};

export const UpdateModal = ({ open, handleClose, handleUpdate, id }) => {
    const { findProduct } = useProduct()

    const [dataForm, setDataForm] = useState({
        name: '',
        price: '',
        category: '',
        description: ''
    })
    useEffect(() => {
        findProduct(id).then((product) => setDataForm(product))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])



    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <FormControl sx={style} >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            label='Nome'
                            value={dataForm?.name || ""}
                            onChange={(event) =>
                                setDataForm((dataForm) => ({
                                    ...dataForm,
                                    name: event.target.value
                                }))}
                            fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="price"
                            variant='outlined'
                            label='Preço'
                            value={dataForm?.price || ""}
                            onChange={(event) =>
                                setDataForm((dataForm) => ({
                                    ...dataForm,
                                    price: event.target.value
                                }))}
                            fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="category"
                            variant='outlined'
                            label='categoria'
                            onChange={(event) =>
                                setDataForm((dataForm) => ({
                                    ...dataForm,
                                    category: event.target.value
                                }))}
                            value={dataForm?.category || ""}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="description"
                            variant='outlined'
                            label='Descrição'
                            value={dataForm?.description || ""}
                            onChange={(event) =>
                                setDataForm((dataForm) => ({
                                    ...dataForm,
                                    description: event.target.value
                                }))}
                            multiline
                            rows={10}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent='space-between'>
                        <Button
                            type="button"
                            color='success'
                            variant="contained"
                            onClick={() => handleUpdate(dataForm)}>Adicionar</Button>
                        <Button
                            type="button"
                            color='inherit'
                            variant="contained"
                            onClick={handleClose}>Voltar</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Modal>
    )
}
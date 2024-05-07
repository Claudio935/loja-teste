import { Button, FormControl, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { useProduct } from "../../hook/useProduct"


export const CreateProduct = () => {
    const { addProduct } = useProduct()
    const [dataForm, setDataForm] = useState({
        name: '',
        price: '',
        category: '',
        description: ''
    })

    const handleSubmit = () => {

        addProduct(dataForm)
    }

    return (
        <FormControl  >
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <TextField
                        name="name"
                        variant='outlined'
                        label='Nome'
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
                        fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="description"
                        variant='outlined'
                        label='Descrição'
                        onChange={(event) =>
                            setDataForm((dataForm) => ({
                                ...dataForm,
                                description: event.target.value
                            }))}
                        multiline
                        rows={10}
                        fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        color='success'
                        variant="contained"
                        onClick={handleSubmit}>Adicionar</Button>
                </Grid>
            </Grid>
        </FormControl>
    )
}
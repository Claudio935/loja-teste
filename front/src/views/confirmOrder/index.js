import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar"
import { useClient } from "../../hook/useClient"
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { useLocalStorageOrder } from "../../hook/useLocalStorageOrder"
import { CardProduct } from "../../components/card"
import { ButtonForm } from "../../components/button"
import { useOrder } from "../../hook/useOrder"


const ConfirmOrder = () => {
    const { id } = useParams()
    const navigation = useNavigate()
    const { findClient } = useClient()
    const { data } = useLocalStorageOrder()
    const { addOrder } = useOrder()

    const [dataClient, setDataCLient] = useState({})


    useEffect(() => {
        findClient(id).then((client) => {
            if (!client) {
                return
            }
            setDataCLient(client)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleAddOrder = () => {
        if (data) {
            const newOrderProducts = []
            data?.forEach((product) => {
                newOrderProducts.push({ productId: product._id, amount: product.amount })
            })
            addOrder({ clientId: dataClient._id, products: newOrderProducts })
            localStorage.removeItem('order')
            navigation("/")
        }

    }

    return (

        <Stack
            height={"calc(100vh - 64px)"}
            overflow={"auto"}
            marginTop={"64px"}
            boxSizing={"border-box"}
            spacing={4}
        >
            <NavBar />

            <Typography
                variant="h3"
                textAlign={"center"}>
                Deseja confirmar o seu pedido?</Typography>


            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}

            >
                <Box
                    overflow={"auto"}
                    height={"calc(100vh - 184px)"}
                    boxSizing={"border-box"}
                    padding={"10px"}
                >
                    <Grid container spacing={4}>

                        {data?.map((product) =>
                            <Grid item xs={12} md={6} key={product._id}>
                                <CardProduct
                                    product={product}
                                    action={false} />
                            </Grid>
                        )}

                    </Grid>
                </Box>

                <Stack
                    padding={"20px"}
                    width={"50%"}
                    spacing={2}>
                    <Typography
                        variant="body1"
                        fontWeight={700}
                        fontSize={"12px"}>Dados:</Typography>
                    <Divider />
                    <Typography
                        variant="body1"
                        fontWeight={700}
                        fontSize={"12px"}>Nome: {dataClient?.name}</Typography>
                    <Typography
                        variant="body1"
                        fontWeight={700}
                        fontSize={"12px"}>Endereço: {dataClient?.address}</Typography>
                    <Typography
                        variant="body1"
                        fontWeight={700}
                        fontSize={"12px"}>Email: {dataClient?.email}</Typography>
                    <Typography
                        variant="body1"
                        fontWeight={700}
                        fontSize={"12px"}>Telefone: {dataClient?.phone}</Typography>
                    <Divider />
                    <ButtonForm
                        message={"Comprar"}
                        onClick={handleAddOrder} />

                </Stack>
            </Stack>
        </Stack >

    )
}

export default ConfirmOrder
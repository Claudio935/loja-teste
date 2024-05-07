import { Box, Button, Card, CardContent, IconButton, Stack, Typography } from "@mui/material"
import useCount from "../../hook/useCount"
import { Add, HorizontalRule } from "@mui/icons-material"
import { calculatePrice } from "../../utils/functions"
import { useLocalStorageOrder } from "../../hook/useLocalStorageOrder"
import { useAlert } from "../../hook/useAlert"


export const CardProduct = ({ product, action = true }) => {

    const { count, decrement, increment } = useCount(1)

    const { addCart } = useLocalStorageOrder()

    const showAlert = useAlert()

    const handleAddCart = () => {
        addCart(product, count)
        showAlert("Produto adicionado ao carrinho", "success")
    }




    return (
        <Card sx={{
            maxWidth: 250,
            height: 300,
            padding: "20px"
        }} key={product._id}>
            <CardContent sx={{
                height: "100%",

            }} >
                <Stack

                    sx={{
                        height: "100%", display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }} >

                    <Typography
                        variant='h4'
                        fontWeight={600}>{product?.name}</Typography>
                    <Box height="auto" overflow="auto">
                        <Typography
                            variant='body2'
                            fontSize='10px'>Descrição: {product?.description}</Typography>
                    </Box>
                    <Typography
                        variant='body2'
                        fontSize='11px'
                        sx={{
                            color: 'red',
                            fontWeight: 700
                        }}>Preço: {
                            calculatePrice(
                                product.amount ? product.amount : count,
                                product?.price)}</Typography>
                    <Stack
                        spacing={2}
                        direction="row"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <IconButton
                            disabled={!action}
                            onClick={increment}>
                            <Add />
                        </IconButton>
                        <Typography
                            variant="bady1"
                            sx={{
                                fontSize: '11px',
                                fontWeight: 900
                            }}>Qnt: {product.amount ? product.amount : count}</Typography>
                        <IconButton
                            disabled={!action}
                            onClick={decrement}>
                            <HorizontalRule />
                        </IconButton>

                    </Stack>

                    {action && <Button
                        sx={{ fontSize: '9px' }}
                        onClick={handleAddCart}>Adicionar ao Carrinho</Button>}
                </Stack>

            </CardContent>
        </Card>
    )
}
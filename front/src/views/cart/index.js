
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material"
import { useNavigate } from "react-router"
import { Delete } from "@mui/icons-material"
import { AccordionProduct } from "../../components/Accordion"
import { NavBar } from "../../components/navbar"
import { useLocalStorageOrder } from "../../hook/useLocalStorageOrder"
import { calculatePrice } from "../../utils/functions"
import { ButtonForm } from "../../components/button"
import { NotFoundItem } from "../notFoundItem"

const Cart = () => {

    const { data, deleteCart } = useLocalStorageOrder()
    const navigation = useNavigate()


    return (
        <Stack
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 64px)",
                marginTop: "64px",
                padding: "40px",
                boxSizing: "border-box"

            }}>
            <NavBar />
            <Typography variant="h3">Confira o seu pedido!!</Typography>
            <Box overflow={"auto"} height={"70%"} width={"100%"}>
                {data.length === 0 && <NotFoundItem />}
                {
                    data?.map((product) =>
                        <AccordionProduct product={product} key={product._id}>
                            <Stack
                                width={"100%"}
                                spacing={2}
                                direction={"row"}>
                                <Typography
                                    variant="body1"
                                    fontWeight={700}>
                                    Qntd: {product.amount}</Typography>
                                <Typography
                                    variant="body1"
                                    fontWeight={700}>
                                    Preço: {calculatePrice(product.amount, product.price)}
                                </Typography>
                            </Stack>
                            <Tooltip title='Deletar produto'>
                                <IconButton
                                    color="error"
                                    size="small"
                                    onClick={() =>
                                        deleteCart(product?._id)}
                                >
                                    <Delete
                                        fontSize="small"
                                    />
                                </IconButton>
                            </Tooltip>
                        </AccordionProduct>
                    )
                }
            </Box>
            <ButtonForm
                message={"Deseja realizar este pedido?"}
                onClick={() => navigation("/client")} />
        </Stack>
    )
}

export default Cart
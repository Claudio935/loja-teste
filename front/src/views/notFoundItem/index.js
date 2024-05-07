import { Box, Typography } from "@mui/material"


export const NotFoundItem = () => {

    return (
        <Box
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h5" >Valores não encontrados</Typography>
        </Box>
    )
}
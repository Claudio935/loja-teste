import { Box, CircularProgress, Stack } from "@mui/material"
import { useClient } from "../../hook/useClient"
import { AccordionClient } from "../../components/Accordion"
import { NotFoundItem } from "../notFoundItem"

export const Clients = () => {
    const { dataClients, loading } = useClient()

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
    if (!dataClients.length > 0) {
        return (
            <NotFoundItem />
        )
    }
    return (
        <Stack>
            {dataClients?.map(client =>
                <AccordionClient
                    client={client}
                    key={client._id} >
                </AccordionClient>)}
        </Stack>
    )
}
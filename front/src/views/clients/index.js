import { Box, CircularProgress, Stack } from "@mui/material"
import { useClient } from "../../hook/useClient"
import { AccordionClient } from "../../components/Accordion"

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
    return (
        <Stack>
            {dataClients.map(client =>
                <AccordionClient
                    client={client}
                    key={client._id} >
                </AccordionClient>)}
        </Stack>
    )
}
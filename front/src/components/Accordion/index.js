import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"


export const AccordionProduct = ({ children, product }) => {

    return (
        <Accordion key={product._id} sx={{ width: '100%' }} >
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Typography fontWeight={900} variant="body1">{product?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {product?.description}
                </Typography>
                {children}
            </AccordionDetails>
        </Accordion>

    )
}
export const AccordionClient = ({ children, client }) => {

    return (
        <Accordion key={client._id} sx={{ width: '100%' }} >
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Typography fontWeight={900} variant="body1">{client?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {client?.address}
                </Typography>
                <Typography>
                    {client?.phone}
                </Typography>
                <Typography>
                    {client?.email}
                </Typography>
                {children}
            </AccordionDetails>
        </Accordion>

    )
}

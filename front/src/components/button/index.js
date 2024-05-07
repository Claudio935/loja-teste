import { Button } from "@mui/material"

export const ButtonForm = ({ message, ...props }) => {

    return (
        <Button
            {...props}
            variant="container"
            sx={{
                backgroundColor: "#68B033",
                fontWeight: 700,
                color: "#fff",
                "&:hover": {
                    backgroundColor: "#BFF7A3"
                }
            }}>
            {message}</Button>
    )
}
import { Button, Modal, Stack, Typography } from "@mui/material"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
};
export const DialogModal = ({ open, handleClose, handleAccept, message }) => {


    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Stack sx={style} spacing={2}>
                <Typography>
                    {message}
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button
                        color="success"
                        variant="contained"
                        onClick={handleAccept}>Aceitar</Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={handleClose}>Cancelar</Button>
                </Stack>
            </Stack>
        </Modal>
    )
}
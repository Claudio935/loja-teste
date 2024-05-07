import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { AlertContext } from "../../hook/useAlert";





const AlertProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('info');


    const showAlert = (newMessage, newSeverity = 'info') => {
        setMessage(newMessage);
        setSeverity(newSeverity);
        setOpen(true);
    };

    const hideAlert = () => {
        setOpen(false);
    };

    return (
        <AlertContext.Provider value={showAlert}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={hideAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={hideAlert}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >{message}</Alert>
            </Snackbar>
        </AlertContext.Provider>
    );
};

export default AlertProvider
import { Stack, TextField, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar"
import { useState } from "react"
import { ButtonForm } from "../../components/button"
import { useClient } from "../../hook/useClient"
import { useAlert } from "../../hook/useAlert"
import { useNavigate } from "react-router"

const ClientForm = () => {

    const { addClient } = useClient()
    const showAlert = useAlert()
    const navigation = useNavigate()

    const [clientDataForm, setClientDataForm] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    })

    const handleAddClient = () => {

        if (!clientDataForm.name) {
            return showAlert("Adicione o nome", "error")
        }
        if (!clientDataForm.address) {
            return showAlert("Adicione o endereço", "error")
        }
        if (!clientDataForm.email) {
            return showAlert("Adicione o email", "error")
        }
        if (!clientDataForm.phone) {
            return showAlert("Adicione o telefone", "error")
        }
        addClient(clientDataForm).then((data) => {

            if (data._id) {
                navigation(`/confirmOrder/${data._id}`)
            }

        })

    }
    return (
        <Stack
            spacing={4}
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 64px)",
                marginTop: "64px",
                padding: "40px",
                boxSizing: "border-box",
            }}>
            <NavBar />
            <Typography
                variant="h3">
                Preencha o formulário para continuar!</Typography>
            <TextField
                variant="outlined"
                label="Nome"
                value={clientDataForm.name}
                fullWidth
                onChange={(event) =>
                    setClientDataForm((clientDataForm) => ({
                        ...clientDataForm,
                        name: event.target.value
                    }))} />

            <TextField
                variant="outlined"
                label="Endereço"
                value={clientDataForm.address}
                onChange={(event) =>
                    setClientDataForm((clientDataForm) => ({
                        ...clientDataForm,
                        address: event.target.value
                    }))}
                fullWidth />

            <TextField
                variant="outlined"
                label="Email"
                fullWidth
                value={clientDataForm.email}
                onChange={(event) =>
                    setClientDataForm((clientDataForm) => ({
                        ...clientDataForm,
                        email: event.target.value
                    }))} />

            <TextField
                variant="outlined"
                label="Telefone"
                fullWidth
                value={clientDataForm.phone}
                onChange={(event) =>
                    setClientDataForm((clientDataForm) => ({
                        ...clientDataForm,
                        phone: event.target.value
                    }))} />

            <ButtonForm
                message={"Cadastrar"}
                onClick={handleAddClient} />
        </Stack>
    )

}


export default ClientForm
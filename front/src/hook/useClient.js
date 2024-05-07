import { useEffect, useState } from "react"
import api from "../services/api";
import { useAlert } from "./useAlert";


export const useClient = () => {
    const showAlert = useAlert()
    const [loading, setLoading] = useState(false)
    const [dataClients, setDataClients] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        setLoading(true)
        api
            .get("/clients/")
            .then((response) => {
                setDataClients(response.data)

            })
            .catch((err) => {
                showAlert('Erro ao buscar os clientes', 'error')
            })
            .finally(() => {
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]);




    const addClient = async ({ name,
        address,
        email,
        phone }) => {
        try {
            const client = await api.post('/clients/create', {
                name: name,
                address: address,
                email: email,
                phone: phone
            })

            return client.data
        }

        catch {
            showAlert('Erro ao adicionar o clientes', 'error')
        }
    }


    const deleteClient = async (id) => {

        await api.get(`/clients/delete/${id}`)
            .then(() => {
                showAlert('Cliente deletado com sucesso!!', 'success')
            })
            .catch(() => {
                showAlert('Erro ao deletar os clientes', 'error')

            }
            )
            .finally(() => {
                setRefetch(!refetch)
            })
    }
    const findClient = async (id) => {
        try {
            const response = await api.get(`/clients/${id}`)
            return response.data

        }
        catch {
            return null
        }


    }

    const updateClient = (id, { name,
        address,
        email,
        phone }) => {

        api.post(`/clients/${id}`, {
            name: name,
            address: address,
            email: email,
            phone: phone
        })
            .then(() => {
                showAlert('Produto atualizado com sucesso!!', 'success')
            })

            .catch(() => showAlert('Erro ao atualizar o produtos', 'error'))
            .finally(() => {
                setRefetch(!refetch)
            })

    }


    return {
        dataClients,
        deleteClient,
        addClient,
        findClient,
        updateClient,
        loading,
    }
}
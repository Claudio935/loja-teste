import { useEffect, useState } from "react"
import api from "../services/api";
import { useAlert } from "./useAlert";


export const useOrder = () => {
    const showAlert = useAlert()
    const [loading, setLoading] = useState(false)
    const [dataOrders, setDataOrders] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        setLoading(true)
        api
            .get("/orders/")
            .then((response) => {
                setDataOrders(response.data)

            })
            .catch((err) => {
                showAlert('Erro ao buscar os clientes', 'error')
            })
            .finally(() => {
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]);




    const addOrder = async ({ clientId,
        products }) => {
        try {
            const order = await api.post('/orders/create', {
                clientId: clientId,
                products: products,

            })
            showAlert("Pedido realizado com sucesso!", "success")
            return order.data
        }

        catch {
            showAlert('Erro ao adicionar o pedido', 'error')
        }
    }


    const deleteOrder = (id) => {

        api.get(`/orders/delete/${id}`)
            .then(() => {
                showAlert('Pedido deletado com sucesso!!', 'success')
            })
            .catch(() => {
                showAlert('Erro ao deletar os pedidos', 'error')

            }
            )
            .finally(() => {
                setRefetch(!refetch)
            })
    }
    const findOrder = async (id) => {
        try {
            const response = await api.get(`/orders/${id}`)
            return response.data

        }
        catch {
            return null
        }


    }

    const updateOrder = (id, { clientId,
        products, }) => {

        api.post(`/orders/${id}`, {
            clientId: clientId,
            products: products,
        })
            .then(() => {
                showAlert('Pedido atualizado com sucesso!!', 'success')
            })

            .catch(() => showAlert('Erro ao atualizar o pedido', 'error'))
            .finally(() => {
                setRefetch(!refetch)
            })

    }


    return {
        dataOrders,
        deleteOrder,
        addOrder,
        findOrder,
        updateOrder,
        loading,
    }
}
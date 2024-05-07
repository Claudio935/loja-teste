import { useEffect, useState } from "react"
import api from "../services/api";
import { useAlert } from "./useAlert";


export const useProduct = () => {
    const showAlert = useAlert()
    const [loading, setLoading] = useState(false)
    const [dataProducts, setDataProducts] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        setLoading(true)
        api
            .get("/products/")
            .then((response) => {
                setDataProducts(response.data)

            })
            .catch((err) => {
                showAlert('Erro ao buscar os produtos', 'error')
            })
            .finally(() => {
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]);




    const addProduct = ({ name, price, category, description }) => {

        api.post('/products/create', {
            name: name,
            price: price,
            category: category,
            description: description
        })
            .then(() => showAlert('Produto adicionado com sucesso!!', 'success'))

            .catch(() => showAlert('Erro ao adicionar o produtos', 'error'))
    }


    const deleteProduct = async (id) => {

        api.get(`/products/delete/${id}`)
            .then(() => {
                showAlert('Produto deletado com sucesso!!', 'success')
            })
            .catch(() => {
                showAlert('Erro ao deletar o produtos', 'error')

            }
            )
            .finally(() => {
                setRefetch(!refetch)
            })
    }
    const findProduct = async (id) => {
        try {
            const response = await api.get(`/products/${id}`)
            return response.data

        }
        catch {
            return null
        }


    }

    const updateProduct = (id, { name, price, category, description }) => {

        api.post(`/products/${id}`, {
            name: name,
            price: price,
            category: category,
            description: description
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
        dataProducts,
        deleteProduct,
        addProduct,
        findProduct,
        updateProduct,
        loading,
    }
}
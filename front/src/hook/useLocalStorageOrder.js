import { useEffect, useState } from "react"


export const useLocalStorageOrder = () => {

    const [data, setData] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        const order = getOrderLocalStorage()
        setData(order)
    }, [refetch])

    const getOrderLocalStorage = () => {
        const order = JSON.parse(localStorage.getItem('order'))
        if (order) {
            return order
        }
        return []
    }
    const addCart = (product, count) => {
        const order = getOrderLocalStorage()
        order.push({ ...product, amount: count })
        localStorage.setItem('order', JSON.stringify(order))
        setRefetch(!refetch)

    }
    const deleteCart = (id) => {
        const order = getOrderLocalStorage()
        if (!order) {
            return
        }
        const newOrder = order.filter(item => item._id !== id)

        localStorage.setItem('order', JSON.stringify(newOrder))
        setRefetch(!refetch)

    }


    return { getOrderLocalStorage, addCart, deleteCart, data, }



}
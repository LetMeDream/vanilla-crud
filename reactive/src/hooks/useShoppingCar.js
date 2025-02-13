import { useState, useEffect } from "react"

export const useShoppingCar = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (products?.length) console.log(products)
    }, [products])

    return {
        products,
        setProducts
    }
}
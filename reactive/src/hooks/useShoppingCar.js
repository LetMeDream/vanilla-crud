import { useState } from "react"

export const useShoppingCar = () => {
    const [products, setProducts] = useState(['product1', 'product2', 'product3'])

    

    return {
        products
    }
}
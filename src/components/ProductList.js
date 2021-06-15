import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/action/productAction'
import axios from 'axios'

const ProductList = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const getProductList = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("err", err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        getProductList()
    }, [])


    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )

}

export default ProductList
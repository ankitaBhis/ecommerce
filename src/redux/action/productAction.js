import { actionType } from '../constants/actionType'

export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}
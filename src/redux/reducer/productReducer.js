import { actionType } from '../constants/actionType'

const initialState = {
    products: [

    ]
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return { ...state, ...payload }

        default:
            return state
    }
}


import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: []
}

const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts(state,action){
            state.products = action.payload
        }
    }
})

export const { setProducts } = product.actions

export const fetchProducts = () => async (dispatch) => {
    const res = await axios.get("https://fakestoreapi.com/products")
    dispatch(setProducts(res.data))
}

export default product.reducer
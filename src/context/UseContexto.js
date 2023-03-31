import React, { useReducer } from 'react'
import Reducer from './Reducer'
import Contexto from './Contexto'
import Papa from 'papaparse'


export default function UseContexto(props) {
    const API = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYT_8wKtyqCP2-s6XmVFrrBOuQrF0C0ebm1gjqeB3nDfiA75yOWzBJwwWeEQBmd6sJf4n648s3NJwn/pub?gid=0&single=true&output=csv"
    const {children} = props
    const initState = {
        cart: [],
        products: [],
    }

    const [state, dispatch] = useReducer(Reducer, initState)

    const getProducts = async ()=>{
        const res = await fetch(API)
        const data = await res.text();
        const parsed = await new Promise((resolve, reject)=>{
            Papa.parse(data, {header: true, complete: resolve, error: reject})
        })
        dispatch({type: 'GET_PRODUCTS', payload: parsed.data})
    }

    const setCart = (id) =>{
        dispatch({type:'SET_CART', payload: id})
    }

    const deleteCart = (id) => {
        dispatch({type:'DELETE_CART', payload: id})
    }
  return (
   <Contexto.Provider value={{products: state.products, cart: state.cart, getProducts, setCart, deleteCart}}>
    {children}
   </Contexto.Provider>
  )
}

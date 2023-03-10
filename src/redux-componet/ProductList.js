import React, { useEffect } from 'react'
import axios from "axios"
import { useSelector , useDispatch } from "react-redux"
import { setProducts } from '../React-Redux/Action/ProductAction';
import ProductComponet from './ProductComponet';

export default function ProductList() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Err", err)
            })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <ProductComponet />
        </>
    )
}

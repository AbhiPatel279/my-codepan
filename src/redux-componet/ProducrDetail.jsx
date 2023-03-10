import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeselectedProducts } from '../React-Redux/Action/ProductAction';

export default function ProducrDetail() {
    const product = useSelector((state) => state.product)
    const { id, title, image, price, category } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductdetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(selectedProducts(response.data))
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductdetails();
        return () => {
            dispatch(removeselectedProducts())
        };
    }, [productId])
    return (
        <>
            <div className="container" style={{ marginTop: "70px" }}>
                {Object.keys(product).length === 0 ? (
                    <p className="">...loading</p>
                ) : (
                    <div className="card-main d-flex flex-wrap">
                        <div style={{ width: "33.3%" }}>
                            <Link to={`/product/${id}`}>
                                <div className="card" style={{ marginBottom: "20px", marginRight: "10px", marginLeft: "10px" }} key={id}>
                                    <img src={image} className="card-img-top" alt={title} style={{ width: "100%", height: "300px" }} />
                                    <div className="card-body" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{price}</p>
                                        <p className="card-text">{category}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

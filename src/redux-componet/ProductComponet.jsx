import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

export default function ProductComponet() {

    const products = useSelector((state) => state.allProducts.products);

    return (
        <>
            <div className="container" style={{ marginTop: "70px" }}>
                <div className="card-main d-flex flex-wrap">
                    {products.map((product) => {
                        const { id, title, image, price, category } = product;
                        return (
                            <>
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
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

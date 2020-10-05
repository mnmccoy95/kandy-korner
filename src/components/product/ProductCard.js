import React from "react"
import "./Product.css"
import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="product__name">
            {/* <Link to={`/products/${product.id}`}> */}
                { product.name }
            {/* </Link> */}
        </h3>
        <div>{ product.productType.type }</div>
        <div> ${product.price} </div>
    </section>
)
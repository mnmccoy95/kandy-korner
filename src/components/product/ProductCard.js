import React, { useContext } from "react"
import "./Product.css"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"

export const ProductCard = ({ product }) => {
    const { addCustomerCandy } = useContext(CustomerCandyContext)
    const customer = parseInt(localStorage.getItem("kandy_customer"))

    return (
    <section className="product">
        <h3 className="product__name">
                { product.name }
        </h3>
        <div>{ product.productType.type }</div>
        <div> ${product.price} </div>
        <button onClick={
            () => {
                addCustomerCandy(product.id, customer)
            }
        }>Add to Order</button>
    </section>
    )
}
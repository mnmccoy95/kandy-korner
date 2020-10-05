import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"
import { useParams, useHistory } from "react-router-dom"

export const ProductDetail = () => {
    const { getProductById } = useContext(ProductContext)
	
	const [product, setProduct] = useState({})
	const [productType, setProductType] = useState({})

	
	const {id} = useParams();
	const history = useHistory();

    useEffect(() => {
		console.log("useEffect", id)
        getProductById(id)
        .then((response) => {
			console.log("response", response)
			setProduct(response)
			setProductType(response.productType)
		})
			}, [])

    return (
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__type">{productType.type}</div>
            <div className="product__price">{product.price}</div>
        </section>
    )
}
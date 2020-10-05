import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { useHistory } from 'react-router-dom';
import "./Product.css"

export const ProductList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    const customer = sessionStorage.getItem("kandy_customer")
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getProducts()
		
    }, [])


    const history = useHistory()

    return (
        <div className="products">
            <h2>Products</h2>
            {
          products.map(product => {
            return <ProductCard key={product.id} product={product}/>
          })
            }
        </div>
    )
}
import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => {
    
    
    
    return(
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__candy">Candies Purchsed: {customer.customerCandy.length}</div>
    </section>
)}
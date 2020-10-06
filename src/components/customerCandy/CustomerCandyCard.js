import React from "react"

export const CustomerCandyCard = ({ candy }) => (
    <section className="customerCandy">
        <div className="candy_name">{candy.product.name}: {candy.product.price}</div>
    </section>
)
import React, { useContext, useEffect, useState } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import { CustomerCandyCard } from "./CustomerCandyCard"


export const CustomerCandyList = () => {
    const customer = parseInt(localStorage.getItem("kandy_customer"))
    const { getCustomerCandyById } = useContext(CustomerCandyContext)
    const [ customerCandy, setCustomerCandy ] = useState([])
	
	//useEffect - reach out to the world for something
    useEffect(() => {
        getCustomerCandyById(customer)
        .then((response)=> {
            setCustomerCandy(response)
        })
    }, [])


    return (
        <div className="order">
            <h2>Your Order</h2>
            {
          customerCandy.map(candy => {
            return <CustomerCandyCard key={candy.id} candy={candy}/>
          })
            }
        </div>
    )
}
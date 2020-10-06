import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerCandyContext = createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerCandyProvider = (props) => {
    const [customerCandy, setCustomerCandy] = useState([])

    const getCustomerCandy = () => {
        return fetch(`http://localhost:8088/customerCandy?_expand=customer&_expand=product`)
            .then(res => res.json())
            .then(setCustomerCandy)
    }

    const addCustomerCandy = (candy, customerId) => {
        const customerCandy = {
            productId: candy,
            customerId: customerId
        }

        return fetch("http://localhost:8088/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandy)
        })
            .then(getCustomerCandy)
    }

    const getCustomerCandyById = (id) => {
        return fetch(`http://localhost:8088/customerCandy?_expand=customer&_expand=product&customerId=${id}`)
        .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerCandyContext.Provider value={{
            customerCandy, getCustomerCandy, addCustomerCandy, getCustomerCandyById
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}
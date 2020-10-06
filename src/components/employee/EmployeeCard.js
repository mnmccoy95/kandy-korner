import React, { useContext } from "react"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeCard = ({ employee }) => {
    const { fireEmployee } = useContext(EmployeeContext)
    return (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__address">{employee.location.name}</address>
        <button onClick={() =>{
            fireEmployee(employee)
        }}>Fire Employee</button>
    </section>
)}
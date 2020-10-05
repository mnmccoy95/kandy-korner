import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { useHistory } from 'react-router-dom';
import "./Employee.css"

export const EmployeeList = () => {
   // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		console.log("EmployeeList: useEffect - getEmployees")
		getEmployees()
		
    }, [])


    const history = useHistory()

    return (
        <div className="employees">
            <h2>Employees</h2>
          <button onClick={() => {history.push("/employees/create")}}>
                    Add Employee
              </button>
            {
          employees.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
          })
            }
        </div>
    )
}
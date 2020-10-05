import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { useHistory } from 'react-router-dom'
import "./Location.css"

export const LocationList = () => {
   // This state changes when `getLocation()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		console.log("LocationList: useEffect - getLocation")
    getLocations()
		
    }, [])

    const history = useHistory()

    return (
        <div className="locations">
            <h2>Locations</h2>
          <button onClick={() => {history.push("/locations/create")}}>
                    Add Location
              </button>
            {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
            }
        </div>
    )
}
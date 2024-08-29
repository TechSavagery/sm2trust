import React, { createContext, useState } from 'react'

export const MapContext = createContext(null)
const MapDirectionProvider = ({ children }) => {
    const [mapDirection, setMapDirection] = useState([35.118155, -120.584321])
    return (
        <MapContext.Provider value={{ mapDirection, setMapDirection }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapDirectionProvider
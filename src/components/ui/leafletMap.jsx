'use client'
import React, { useContext, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet";
import { MapContext } from '@/contextApi/mapDirectionProvider';
import { addressList } from '@/lib/fakeData/addressList';


const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const MultipleMarkers = () => {
    return addressList.map(({id, lat_lng}) => {
        return <Marker key={id} position={lat_lng} icon={icon}></Marker>;
    });
}

function SetViewOnClick({ mapDirection }) {
    const map = useMap();
    map.setView(mapDirection, map.getZoom());
  
    return null;
  }

function MapAccessibilityLabels() {
    const map = useMap();

    useEffect(() => {
        const container = map.getContainer();
        container.setAttribute("aria-label", "Office location map");

        const zoomIn = container.querySelector(".leaflet-control-zoom-in");
        const zoomOut = container.querySelector(".leaflet-control-zoom-out");

        zoomIn?.setAttribute("aria-label", "Zoom in");
        zoomOut?.setAttribute("aria-label", "Zoom out");
    }, [map]);

    return null;
}

const LeafletMap = () => {
    const { mapDirection } = useContext(MapContext)
    return (
        <MapContainer center={mapDirection} zoom={13} scrollWheelZoom={true}  style={{ height: "392px" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">SM2Trust</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetViewOnClick mapDirection={mapDirection}/>
            <MapAccessibilityLabels />
            <MultipleMarkers />
        </MapContainer>

    )
}

export default LeafletMap
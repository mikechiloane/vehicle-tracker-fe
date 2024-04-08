import React from "react";
import {AdvancedMarker} from "@vis.gl/react-google-maps";
import ArrowIcon from "./ArrowIcon.tsx";

interface TripHistoryProp {
    id: string,
    position: { lon: number, lat: number }
    rotation: number
}

const VehiclePath: React.FC<TripHistoryProp> = ({id, position, rotation}) => {

    return (
        <AdvancedMarker
            position={{lat: position.lat, lng: position.lon}}
            title={id}
        >
            <ArrowIcon rotation={rotation}/>
        </AdvancedMarker>
    )
}


export default VehiclePath;
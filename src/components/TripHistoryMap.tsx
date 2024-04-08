import React from 'react';
import {GOOGLE_MAPS_API_KEY} from "../config/app.ts";
import {useVehicles, VehiclePayload} from "../hooks/useVehicles.ts";
import {APIProvider, Map} from "@vis.gl/react-google-maps";
import {calculateRotations} from "../utils/directionUtil.ts";
import VehicleMarker from "./VehicleMarker.tsx";
import VehiclePath from "./VehiclePath.tsx";
import { useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";

interface Props {
    vehicles: VehiclePayload[];
    tripHistory: { lon: number, lat: number }[];
}

const TripHistoryMap: React.FC<Props> = ({vehicles, tripHistory}) => {
    useVehicles();
    const center = useSelector((state: RootState) => state.location.center);
    const zoom = useSelector((state: RootState) => state.location.zoom);
    const showTripHistory = useSelector((state: RootState) => state.location.showTripHistory);
    const renderMarkers = () => {
        return vehicles.map((vehicle, index) => (
            <VehicleMarker reg={vehicle.reg} status={vehicle.status} key={index} lat={vehicle.lat} lon={vehicle.lon}/>
        ));
    };

    const renderTripHistory = () => {
        const directions = calculateRotations(tripHistory);
        return tripHistory.map((point, index) => {
            return (
                <VehiclePath key={index} id="dfd" position={point} rotation={directions[index]}/>
            )
        });
    }


    return (

        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <Map
                style={{width: '100vw'}}
                defaultCenter={{lat: center.lat, lng: center.lng}}
                defaultZoom={zoom}

                mapId={"b1b1b1b1b1b1b1b1"}
            >
                {showTripHistory && renderTripHistory()}
                {renderMarkers()}
            </Map>
        </APIProvider>

    );
};

export default TripHistoryMap;

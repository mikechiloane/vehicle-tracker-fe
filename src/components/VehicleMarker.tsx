import React, {useEffect, useState} from "react";
import {AdvancedMarker} from "@vis.gl/react-google-maps";
import {vehicleMarkerStyle} from "./styles/vehicle.styles.ts";
import {HiMiniTruck} from "react-icons/hi2";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";

interface VehicleMarkerProps {
    lat: number;
    lon: number;
    status: string;
    reg:string
}

const VehicleMarker: React.FC<VehicleMarkerProps> = (vehicleMarkerProps: VehicleMarkerProps) => {
    const [width,setWidth] = useState(30);
    const selectedVehicle = useSelector((state: RootState) => state.location.selectedVehicle);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setWidth((prevWidth) => (prevWidth === 30 && selectedVehicle==vehicleMarkerProps.reg? 50 : 30));
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [selectedVehicle]);

    return (
        <AdvancedMarker
            position={{lat: vehicleMarkerProps.lat, lng: vehicleMarkerProps.lon}}
            className={vehicleMarkerStyle(vehicleMarkerProps.status)}
        >
            <motion.div
                animate={{width: width, height: width}}
                transition={{duration: 1}}
                className="flex items-center justify-center bg-white rounded-full shadow-lg"
            >
                <HiMiniTruck className="text-black  text-3xl"/>
            </motion.div>
        </AdvancedMarker>

    )
}

export default VehicleMarker;
import React from "react";
import {vehicleTimelineDot} from "./styles/vehicle.styles.ts";

const VehicleTimelineDot: React.FC<{ status: string }> = ({status}) => {
    return (
        <div className={vehicleTimelineDot(status)}></div>
    )
}

export default VehicleTimelineDot;
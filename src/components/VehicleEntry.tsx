import React from "react";
import {Location} from "../service/locationService.ts";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {HiOutlineTruck} from "react-icons/hi";
import {vehicleStatusStyle} from "./styles/vehicle.styles.ts";
import {AiOutlineSend} from "react-icons/ai";
import TripHistoryList from "./TripHistoryList.tsx";


const VehicleEntry: React.FC<{
    vehicle: Location,
    onSelect(reg: string): void,
    onTripClick(reg: string): void
}> = ({vehicle, onSelect, onTripClick}) => {

    const selectedVehicle = useSelector((state: RootState) => state.location.selectedVehicle);
    const tripHistory = useSelector((state: RootState) => state.location.tripHistory);

    return (
        <div>
            <li className="flex items-center gap-6 pb-2 border-b-[1px]">
                <div className="flex gap-6 w-full " onClick={() => onSelect(vehicle.reg)}>
                    <div className="flex bg-gray-100 rounded-full">
                        <div className="flex p-2">
                            <HiOutlineTruck className="text-[24px]"/>
                            <div className={vehicleStatusStyle(vehicle.status)}></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-lg  text-gray-900">{vehicle.reg}</p>
                        <p className="text-[12px] -my-1  text-gray-500">{vehicle.status}</p>

                    </div>
                </div>
                <div className="flex  justify-end" onClick={() => onTripClick(vehicle.reg)}>
                    <div className=" bg-gray-200 px-2 rounded flex items-center gap-x-2">
                        <p className=" text-sm my-2">Trip</p>
                        <AiOutlineSend className="text-[12px]"/>
                    </div>
                </div>

            </li>
            {vehicle.reg == selectedVehicle && <TripHistoryList locations={tripHistory}/>}

        </div>
    );
}


export default VehicleEntry;
import VehicleList from "./VehicleList.tsx";
import TripHistoryMap from "./TripHistoryMap.tsx";
import React from "react";
import AppHeader from "./Header.tsx";
import {useVehicles} from "../hooks/useVehicles.ts";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";


const MainLayout: React.FC = () => {
    useVehicles();
    const vehicles = useSelector((state: RootState) => state.location.locations);
    const tripHistory = useSelector((state: RootState) => state.location.tripHistory);
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden">
            <AppHeader/>
            <div className="absolute z-50 my-[150px] mx-[12px]  bg-white rounded-2xl">
                <VehicleList vehicles={vehicles} onSelect={() => null}/>
            </div>
            <div className="bg-red-900 relative h-full">
                <div className="flex justify-end bg-red-900 w-full h-full">
                    <TripHistoryMap vehicles={vehicles} tripHistory={tripHistory}/>
                </div>
            </div>
        </div>
    )

}

export default MainLayout;
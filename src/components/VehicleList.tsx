import React, {useState} from 'react';
import {Location} from "../service/locationService.ts";
import {useDispatch} from "react-redux";
import {setCenter, setSelectedVehicle, setShowTripHistory, setTripHistory} from "../redux/slice/locationSlice.ts";
import VehicleEntry from "./VehicleEntry.tsx";
import getTripHistory from "../utils/getTripHistory.ts";

interface VehicleListProps {
    vehicles: Location[];
    onSelect: (vehicle: string) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({vehicles, onSelect}) => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSelect = async (reg: string) => {
        dispatch(setShowTripHistory('off'));
        dispatch(setSelectedVehicle(reg));
        const selectedVehicle: Location = vehicles.find(vehicle => vehicle.reg === reg) as Location;
        dispatch(setCenter({lat: selectedVehicle.lat, lng: selectedVehicle.lon}));
        await getTripHistory(reg).then(
            (tripHistory) => {
                dispatch(setTripHistory(tripHistory));
            }
        )


    }

    const handleTripSelect = async (reg: string) => {
        const tripHistory = await getTripHistory(reg);
        dispatch(setTripHistory(tripHistory));
        dispatch(setShowTripHistory(reg))
        const selectedVehicle: Location = vehicles.find(vehicle => vehicle.reg === reg) as Location;
        dispatch(setCenter({lat: selectedVehicle.lat, lng: selectedVehicle.lon}));
    }

    // Filter vehicles based on searchQuery
    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.reg.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div
            className="flex relative flex-col p-6 min-w-[350px] max-h-[800px] overflow-y-auto bg-white rounded shadow-xl">
            <h2 className="text-xl font-semibold text-gray-900">Tracked Vehicles</h2>
            <VehicleSearch setSearchQuery={setSearchQuery}/>
            <ul className="flex flex-col gap-y-2 mt-8">
                {filteredVehicles.map((vehicle, index) => (
                    <li key={index} onClick={() => onSelect(vehicle.status)}>
                        <VehicleEntry onTripClick={handleTripSelect} onSelect={handleSelect} vehicle={vehicle}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

interface VehicleSearchProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const VehicleSearch: React.FC<VehicleSearchProps> = ({setSearchQuery}) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    return (
        <input
            className="border-2 mt-8 p-2 rounded-md border-gray-400 placeholder-gray-600 outline-gray-200"
            placeholder="Enter Registration"
            onChange={handleSearchChange}
        />
    );
}

export default VehicleList;

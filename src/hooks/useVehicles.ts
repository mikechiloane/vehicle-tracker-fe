import { useEffect } from "react";
import LocationService from "../service/locationService.ts";
import { useDispatch } from "react-redux";
import { setLocations } from "../redux/slice/locationSlice.ts";
import io from 'socket.io-client';
import { SOCKETIO_URL } from "../config/app.ts";

export interface VehiclePayload {
    reg: string;
    lat: number;
    lon: number;
    timestamp: string;
    status: string;
}

export const useVehicles = () => {
    const socket = io(SOCKETIO_URL);
    const locationService = LocationService;
    const dispatch = useDispatch();

    const getVehicles = async () => {
        try {
            const locationData = await locationService.getAllLocation();
            dispatch(setLocations(locationData));
        } catch (error) {
            console.error("Error fetching location data:", error);
        }
    };

    useEffect(() => {
        getVehicles();

        return () => {socket.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleLocationUpdate = (data: Location[]) => {
            dispatch(setLocations(data));
        };

        socket.on('location', handleLocationUpdate);

        return () => {
            socket.off('location', handleLocationUpdate);
        };
    }, [socket, dispatch]);


};

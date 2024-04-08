import {createSlice} from "@reduxjs/toolkit";
import {Location} from "../../service/locationService.ts";

export interface LocationState {
    locations: Location[];
    tripHistory: Location[];
    selectedVehicle: string;
    showTripHistory: boolean;
    center: {lat: number, lng: number};
    locationShownFor: string;
    zoom: number;
}

const initialState: LocationState = {
    locations: [],
    tripHistory: [],
    selectedVehicle: "",
    showTripHistory: false,
    center: {lat: -33.818916127714125,lng: 18.48574846465167},
    locationShownFor: "",
    zoom: 12
}

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        setTripHistory: (state, action) => {
            state.tripHistory = action.payload.locations;
        },
        setSelectedVehicle: (state, action) => {
            if (state.selectedVehicle === action.payload) {
                state.selectedVehicle = "";
                return;
            }
            state.selectedVehicle = action.payload;
        },
        setShowTripHistory: (state, action) => {
            if(action.payload==="off"){
                state.showTripHistory = false;
                return;
            }
            if(action.payload==="tracking"){
                state.showTripHistory = true;
                return;
            }
            if (state.locationShownFor === action.payload && state.showTripHistory) {
                state.showTripHistory = false;
                return;
            }

            state.locationShownFor = action.payload;
            state.showTripHistory =true;
        },
        setCenter: (state, action) => {
            state.center = action.payload;
        },
        setLocationShownFor: (state, action) => {
            state.locationShownFor = action.payload;
        },
        setZoom: (state, action) => {
            state.zoom = action.payload;
        }

    }
});

export default locationSlice.reducer;
export const {setLocations,setZoom,setLocationShownFor, setTripHistory, setSelectedVehicle, setCenter, setShowTripHistory} = locationSlice.actions;
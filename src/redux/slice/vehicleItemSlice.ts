
import { createSlice } from "@reduxjs/toolkit";

export interface VehicleItemState {
    clicked: boolean;
    expandedItem: string;

}

const initialState: VehicleItemState = {
    clicked: false,
    expandedItem: ""
}

const vehicleItemSlice = createSlice({
    name: "vehicleItem",
    initialState,
    reducers: {
        setVehicleItems: (state, action) => {
            state.clicked = action.payload;
        },
        setExpandedItem: (state, action) => {
            state.expandedItem = action.payload;
        }
    }
})

export default vehicleItemSlice.reducer;
export const { setVehicleItems, setExpandedItem } = vehicleItemSlice.actions;
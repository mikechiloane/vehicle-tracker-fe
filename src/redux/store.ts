import {configureStore} from "@reduxjs/toolkit";
import locationSlice from "./slice/locationSlice.ts";
import vehicleItemSlice from "./slice/vehicleItemSlice.ts";

const store =configureStore({
    reducer: {
        location: locationSlice,
        vehicleItem: vehicleItemSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
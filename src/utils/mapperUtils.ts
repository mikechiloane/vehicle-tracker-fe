import {Location} from "../service/locationService.ts";


interface TripHistoryList {
    title: string;
    cardTitle: string;
    text: string | null;
}

export const tripLocationsToHistoryList = (tripLocations: Location[]): TripHistoryList[] => {
    return tripLocations.map((location: Location) => ({
        title: location.timestamp,
        cardTitle: location.reg,
        text: location.status
    }));
};
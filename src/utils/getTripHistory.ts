import LocationService from "../service/locationService.ts";


const getTripHistory = async (registration: string) => {
    const locationService = LocationService;
    return await locationService.getLocationHistory(registration);
}

export default getTripHistory;
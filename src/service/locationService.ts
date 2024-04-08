import apiRequestClient from "../config/apiRequestClient.ts";
import {API_URLS} from "../config/app.ts";
import {AxiosResponse} from "axios";


export interface Location {
    lat: number;
    lon: number;
    status: "stopped" | "moving";
    timestamp: string;
    reg: string;
}

export interface VehicleData {
    reg: string;
    locations: Location[];
}

class LocationService {
  async getLocationHistory(reg:string) {
    const response: AxiosResponse<VehicleData> = await apiRequestClient.get(API_URLS.locationHistory + reg);
    return response.data;
  }

  async getAllLocation() {
    const response: AxiosResponse<Location[]> = await apiRequestClient.get(API_URLS.location);
    return response.data;
  }
}

export default new LocationService();
import axios from 'axios';
import {LOCATION_SERVICE_URL} from "./app.ts";

const apiRequestClient = axios.create({
    baseURL: LOCATION_SERVICE_URL
});

export default apiRequestClient;
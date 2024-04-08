import {Location} from "../service/locationService.ts";
import React from "react";
import {motion} from "framer-motion";
import {Timeline} from "rsuite";
import VehicleTimelineDot from "./VehicleTimelineDot.tsx";
import {formatDateTime} from "../utils/dateFormatUtil.ts";
import {useDispatch} from "react-redux";
import {AiOutlineArrowRight} from "react-icons/ai";
import {setCenter, setShowTripHistory, setZoom} from "../redux/slice/locationSlice.ts";

interface TripHistoryListProps {
    locations: Location[];
}

const TripHistoryList: React.FC<TripHistoryListProps> = ({locations}) => {

    const dispatch = useDispatch();

    const handleTripSelect = (item: Location) => {
        dispatch(setZoom(20));
        dispatch(setCenter({lat:item.lat,lng:item.lon}));
        dispatch(setShowTripHistory("tracking"));
    }
    return (
        <motion.div initial={{height:0}} animate={{height:"auto"}} transition={{duration:0.5}} className=" overflow-hidden">
            <Timeline className="p-4 bg-gray-50 ">
                {locations.map((item, index) => (
                    <Timeline.Item dot={<VehicleTimelineDot status={item.status}/>} key={index}>
                        <div className="flex  items-center gap-6">
                        <div>
                            <p className="text-gray-600">{item.status}</p>
                            <p className="text-gray-600 text-[14px]">{formatDateTime(item.timestamp)}</p>
                        </div>
                        <div className="bg-gray-600 p-1 rounded-full" onClick={()=>handleTripSelect(item)}>
                            <p className="text-white"><AiOutlineArrowRight/> </p>
                        </div>
                        </div>
                    </Timeline.Item>
                ))}
            </Timeline>
        </motion.div>
    )
}

export default TripHistoryList;
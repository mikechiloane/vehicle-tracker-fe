
export const vehicleStatusStyle = (status: string) => {
    switch (status) {
        case "moving":
            return "bg-green-500 h-2 w-2 rounded-full absolute"
        case "stopped":
            return  "bg-red-500 h-2 w-2 rounded-full absolute"
        default:
            return "bg-gray-500 h-2 w-2 rounded-full absolute"

    }
}

export const vehicleMarkerStyle = (status: string) => {
    switch (status) {
        case "moving":
            return "bg-white border-green-500 border-8 p-2 rounded-full "
        case "stopped":
            return "bg-white border-red-500 border-8 p-2 rounded-full "
        default:
            return "bg-white border-orange-500 border-8 p-2 rounded-full"

    }
}

export const vehicleTimelineDot = (status: string) => {

    switch (status) {
        case "moving":
            return "bg-green-500 h-[10px] w-[10px] rounded-full "
        case "stopped":
            return "bg-red-500  h-[10px] w-[10px] rounded-full "

        default:
            return "bg-gray-500 h-[10px] w-[10px] rounded-full "
    }
}
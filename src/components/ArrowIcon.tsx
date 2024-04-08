import React from "react";
import {FaArrowCircleRight} from "react-icons/fa";
import {arrowIconStyle} from "./styles/arrowIconStyle.ts";

interface ArrowIconProps {
    rotation: number
}

const ArrowIcon: React.FC<ArrowIconProps> = ({rotation}) => {
    return (
        <FaArrowCircleRight style={arrowIconStyle(rotation, "moving")}/>
    );
};

export default ArrowIcon;
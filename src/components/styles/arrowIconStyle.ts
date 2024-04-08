

export const arrowIconStyle = (rotation: number,status:string) => {
    return {
        transform: `rotate(${rotation}deg)`,
        width: "20px",
        height: "20px",
        color: status === "moving" ? "green" : "red"
    }
}
export function calculateDirection(lat1:number, lon1:number, lat2:number, lon2:number) {
    const dlon = lon2 - lon1;
    const y = Math.sin(dlon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dlon);
    let angle = Math.atan2(y, x);

    angle *= 180 / Math.PI;

    if (angle < 0) {
        angle += 360;
    }
    angle = Math.round(angle);
    return angle;
}

export function calculateRotations(coordinates:{ lat: number, lon: number }[]) {
    const rotations = [];
    for (let i = 0; i < coordinates.length - 1; i++) {
        const lat1 = coordinates[i].lat;
        const lon1 = coordinates[i].lon;
        const lat2 = coordinates[i + 1].lat;
        const lon2 = coordinates[i + 1].lon;

        const rotation = calculateDirection(lat1, lon1, lat2, lon2)- 90;
        rotations.push(rotation);
    }
    return rotations;
}
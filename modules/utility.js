
export function random (min, max) {
    max = max ? max : min;
    min = max ? min : 0;
    return Math.round(Math.random() * (max - min) - 0.5) + min;
}
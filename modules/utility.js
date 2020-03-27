
export function random (min, max) {
    if (!max) {
        max = min;
        min = 1;
    }
    return Math.round(Math.random() * (max - min + 1) - 0.5) + min;
}
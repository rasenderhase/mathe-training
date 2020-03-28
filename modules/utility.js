
export function random (min, max) {
    if (min === max) {
        return min;
    }
    if (!max) {
        max = min;
        min = 1;
    }
    return Math.round(Math.random() * (max - min + 1) - 0.5) + min;
}
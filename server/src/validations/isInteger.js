export const isInteger = (value) => {
    const num = Number(value);
    return Number.isInteger(num) && num >= 0;
}
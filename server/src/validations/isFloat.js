const isFloat = (value) => {
    const num = Number(value)
    return !isNaN(num) && Number(num) === parseFloat(num) && num >= 0;
};
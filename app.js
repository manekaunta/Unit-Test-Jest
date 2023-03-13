// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

const fromDollarToYen = (dollars) => {
    const yen = dollars * 134.96;
    return yen;
}

const fromEuroToDollar = (euros) => {
    const dollar = euros * 1.206
    return (parseFloat(dollar.toFixed(1)));
}

const fromYenToPound = (yen) => {
    const dollar = pound * 0.0062
    return pound 
}
    

module.exports = { 
    sum,
    fromDollarToYen, 
    fromEuroToDollar,
    fromYenToPound
 };
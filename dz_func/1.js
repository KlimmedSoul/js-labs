const digitsArray = [12, 124, 3456, 253, 5235, 5, 2, 1, 6];
let newDigitsArray = [];

function isNumberRange(digitsArray) {
    let statusArray;
    digitsArray > 0 && digitsArray < 10 ? (statusArray = true) : (statusArray = false);
    return statusArray;
}

for (let i = 0; i < digitsArray.length; i++) {

    isNumberRange(digitsArray[i]) ? newDigitsArray.push(digitsArray[i]) : i = i

}
console.log(newDigitsArray)
const randomArray = ['', null, undefined, 12, 'Привет', false, 0, 0, 115]

function clearArray(randomArray) {
    let cleanArray = [];

    for (let i = 0; i < randomArray.length; i++) {
        randomArray[i] ? cleanArray.push(randomArray[i]) : i = i

    }
    return cleanArray
}

console.log(clearArray(randomArray));
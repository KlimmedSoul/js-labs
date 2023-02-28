let randomArray = [12, 12, 12, 12, 12, 12, 12, 12, 534, 1235, 12, 53, 2, 3, 3, 2, 2]

function includesCheck(randomArray) {
    let cleanArray = [];

    for (let i = 0; i < randomArray.length; i++) {

        !cleanArray.includes(randomArray[i]) ? cleanArray.push(randomArray[i]) : i = i
    }

    return cleanArray;
}

console.log(includesCheck(randomArray));
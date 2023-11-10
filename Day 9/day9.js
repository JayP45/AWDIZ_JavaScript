let myData = {
    name: 'Jay',
    surname: 'Patil',
    DOB: '30-04-1997',
}
myData['age'] = 25
myData['company'] = 'Google'
console.log(myData)


let numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5]
let uniqueArray = [];
let count = 0;
let start = false;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < uniqueArray.length; j++) {
        if (numbers[i] == uniqueArray[j]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        uniqueArray.push(numbers[i]);
    }
    start = false;
    count = 0;
}

console.log(uniqueArray);
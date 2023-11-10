// let myData = {
//     name:'Jay',
//     surname:'Patil',
//     DOB:'30-04-1997',
// }
// myData['age'] =25

// console.log(myData)

const arr = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5]
const newArr = new Set(arr)
console.log({...newArr})


// let numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5]
// let outputArray = [];
// let count = 0;
// let start = false;
 
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < outputArray.length; j++) {
//         if (numbers[i] == outputArray[j]) {
//             start = true;
//         }
//     }
//     count++;
//     if (count == 1 && start == false) {
//         outputArray.push(numbers[i]);
//     }
//     start = false;
//     count = 0;
// }
 
// console.log(outputArray);
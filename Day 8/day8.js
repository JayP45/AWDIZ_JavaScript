// function addition() {
//     var number1 = 10;
//     var number2 = 20;
//     console.log(number1 + number2)
// }
function addition() {
    var number1 = 10;
    var number2 = 20;
    console.log(number1 + number2)
}

// addition();
addition();

// function addition(awdiz, insitute) { // define names for values
//     console.log(awdiz, insitute)
// }
function addition(awdiz, insitute) { // define names for values
    console.log(awdiz, insitute)
}

// addition(10, 20); // pass values
addition(10, 20); // pass values


// function addition(num1, num2, num3) { // define names for values
//     console.log(num1, num2, num3)
// }
function addition(num1, num2, num3) { // define names for values
    console.log(num1, num2, num3)
}

// addition(10, 30, 20); // pass values
addition(10, 30, 20); // pass values


// function addition(num1, num2) {
//     console.log(num1 + num2)
// }
// addition(30, 40)
function addition(num1, num2) {
    console.log(num1 + num2)
}
addition(30, 40)


// Q
// var array = [1, 2, 11, 3, 4, 5, 6, 7, 8, 9, 10];
// var target = 11;

// function findTarget(target, array) {
//     // console.log(target, array)
//     var flag = false;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] == target) {
//             console.log("We got it.")
//             flag = true;
//         }
//     }
//     if (flag == false) {
//         console.log("Not found.")
//     }
// }
// findTarget(target, array)
function findTarget(target, array) {
    // console.log(target, array)
    var flag = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == target) {
            console.log("We got it.")
            flag = true;
        }
    }
    if (flag == false) {
        console.log("Not found.")
    }
}
findTarget(target, array)


// var myfunction = function (num1, num2) {

// myfunction(10, 20)

// function functionOne() {
//     console.log("First") // only print
//     console.log("Second")
//     return "Hi from function"
// }
function functionOne() {
    console.log("First") // only print
    console.log("Second")
    return "Hi from function"
}

// functionOne()
functionOne()


// function addition(num1, num2) {
//     // console.log(2 + 3) // it only print the passed value
function addition(num1, num2) {
    // console.log(2 + 3) // it only print the passed value

//     return num1 + num2  // it return the passed value
// }
    return num1 + num2  // it return the passed value
}

// var answer = addition(2, 3)  // addition function gonna return a value which we are storing into varible
// console.log(answer)
var answer = addition(2, 3)  // addition function gonna return a value which we are storing into varible
console.log(answer)



// function test() {
//     console.log("Test 1")
//     return "hii" // end statement,, block stops
//     console.log("Test 2")
// }
function test() {
    console.log("Test 1")
    return "hii" // end statement,, block stops
    console.log("Test 2")
}

// test()
test()


// function FindEven(number) {
//     if (number % 2 == 0) {
//         return "Number is even" 
//     } else {
//         return "Number is odd"
//         console.log("hii")
//     }
//     console.log("hii")
// }
function FindEven(number) {
    if (number % 2 == 0) {
        return "Number is even" 
    } else {
        return "Number is odd"
        console.log("hii")
    }
    console.log("hii")
}

// console.log(FindEven(3))
console.log(FindEven(3))


function Find(number) {
    if (number % 2 == 0) {
        return "Number is even"
    }
    console.log("hiii")
    if (number > 10) {
        return "NUMBER IS GREATER THAN 10"
    }
}
console.log(Find(14))
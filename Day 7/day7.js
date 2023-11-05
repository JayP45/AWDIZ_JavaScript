let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 12

for (let i = 0; i < a.length - 2; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
        for (let k = 1 + j; k < a.length; k++) {
            if (a[i] + a[j] + a[k] == target) {
                console.log([i, j, k])
            }
        }
    }
}


 kuchbhi=()=> {
    console.log("Hello from inside function.")
}
kuchbhi();
kuchbhi();
kuchbhi();
kuchbhi();



let even =()=> console.log('number is even')
let odd=()=> console.log('number is odd')
let num = 123456;
if(num%2==0){
    even()
}else{
    odd()
}

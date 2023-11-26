// let heading = document.querySelector('h2')
// heading.innerText = heading.innerText + ' From Jay Coding School'
// console.dir(heading)

let divs = document.querySelectorAll('.box')
let indx = 1
for(div of divs){
    div.innerText = `Changed ${indx}`
    indx++
}

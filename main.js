let apple = 12;
let APPLE = 10;

// console.log(Apple);

let str;
console.log(str);

let mas = [1, 2, 3, 4, 5]

console.log(mas.map((el) => {
    if(el % 2 == 0){
        return el
    }
}));

console.log(mas.filter((el) => {
    return el % 2 == 0
}));

// for(let i = 0; i < 10; i++){

// }
// console.log(i);

let inp = document.getElementById('inp');
inp.onchange = (event) => {
    console.log(event);
    
}


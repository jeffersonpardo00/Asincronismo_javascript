let array = [1,2,3 [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));
/*
return
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]

*/

let hello = '   hello world    ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
//--------------
try{
    
}catch/*sin error */{
    error;
}

//-----------------
let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries));
/*result
{ name: 'oscar', age: 32 } */

//------
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description); // My symbol
//es5
function newFunction (name,age,country)
{
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}
//es6
function newFunction2(name = 'oscar',age = 32,country = 'MX')
{
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo',23,'CO');

let hello = "hello";
let world = "world";
//es5
let epicPhrase = hello+' '+world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

///----------------------------
//es5
let lorem = "dfhsadfksdhfjksdhkf jhdjkhfsd hafd\n"
+"otra frase epica que necesitamos."
;
//es6
let lorem2 = `otra frase epica que necesitamos
Ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

///---Destructuracion-------

let person = {
    'name' : 'oscar',
    'age':32,
    'country': 'MX'
}

console.log(person.name,person.age);

let {name, age, country} = person;
console.log(name,age,country);
//-----Operador de propagacion-------

let team1 = ['Oscar','Julian', 'ricardo'];
let team2 = ['valeria', 'jessica', 'camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

///---- Variables -----------

var hola = 'hola';// de forma global

{
    var globalVar = "Global var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'a';

console.log(a);


///------------------
let name = 'jefferson';
let age = 32;

//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);

//-----------------------------

// funcion de flecha

const names = [
    {name:'Oscar',age:32},
    {name:'Jessica',age:27}
];
//es5
let listOfnames = names.map( 
    function (item){
        console.log(item.name);
    });
//es5
let listOfnames2 = names.map( item => console.log(item.name));

const listOfNames3 = (name, age, country) =>
{
    "...."
};


const listOfNames4 = name =>
{
    "...."
};

const square = num => num * num;


//-----------------------------------
// promesa "algo va a pasar"


const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve('hey!');
        }else{
            reject('Ups!!');
        }
    })
};


helloPromise()
.then(response => console.log(response))
.then(()=>console.log('hola!'))
.catch(error => console.log(error));

///-----------CLASES--------------

class calculator {

    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum (valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2,2));

///--------------MODULOS------------------

/*import { hello } from './module';

hello();*/

///----------GENERADORES------------

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }

    if(true){
        yield 'World, ';
    }

}

const  generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


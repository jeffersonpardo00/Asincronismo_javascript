const str = "javascript es maravillosos, con javascript puedo crear el futuro de la web";
const replacedString = str.replace("javascript","python");
console.log(replacedString);
const replacedString2 = str.replaceAll("javascript","python");
console.log(replacedString2);

//-----------------

class Message{
    #show(val){ // la # pone privado el metodo
        console.log(val);
    }
    get #add(val){
        "...";
    }
}

const message = new Message();
message.show('hola');

//-------------

const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response))
// 2 la primer promesa completada
;

///-------------

class AnyClass {
    constructor(element)
    {
        this.ref = new WeakRef(element);
        // no  es recogido por la basura
    }
}


//------------

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2);


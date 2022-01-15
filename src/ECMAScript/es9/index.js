const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};

let {country, ...all} = obj;
console.log(all);

const obj1 = {
    name: 'Oscar',
    age: 32
}

const obj2 = {
    ...obj1,
    country: 'MX'
}

console.log(obj2);

///-------Finally en el promise------------

const helloWorld = () => {

    return new Promise ((resolve,reject) =>{

        (true)
        ? setTimeout(()=> resolve('Hello World'),3000)
        : reject (new Error('Test Error'));

    })
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=>console.log('Finalizó'))
;

//----

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const mont = match[2];
const day = match[3];
console.log(year,mont,day)
;
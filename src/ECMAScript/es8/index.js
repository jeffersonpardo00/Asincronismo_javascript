// --GENERADOR DE MATRIS
const data = {
    forntend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
/*
    result
    [
        [ 'forntend', 'Oscar' ],
        [ 'backend', 'Isabel' ],
        [ 'design', 'Ana' ]
    ] 
*/

console.log(entries.length); // 3

//-------TRANsFORMACIONES de objetos----------

const data2 = {
    forntend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//---padStart--
const string = 'hello';
console.log(string.padStart(7,'hi '));
console.log(string.padEnd(12,'----------'));
console.log('food '.padEnd(12,'----------'));

///----Async Await-------

const helloWorld = () => {

    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve('Hello World'),3000)
        : reject(new Error('Test Error'));

    });

}

const HelloAsync = async () =>
{
    const hello = await helloWorld();
    console.log(hello);
}

console.log('Before');
HelloAsync();
console.log('After');

const anotherFunction = async () => {

    try 
    {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) 
    {
        console.error(error);
    }

}

console.log('Before 1');
anotherFunction();
console.log('After 1');
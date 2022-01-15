//ejemplo de objeto

var miAuto = {
marca: "Toyota",
modelo: "Corolla",
annio: 2020,
detalleDelAuto: function (){
    console.log(`Auto ${this.modelo} ${this.annio}`);
}
}

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("tesla","Model 3", 2020);
var autoNuevo2 = new auto("tesla","Model x", 2018);
var autoNuevo3 = new auto("toyota","Corolla", 2020);


var listaAutos = [];

for(var i=0; i<=30; i++){

    var marcai = "";
    var modeloi = "";
    var annioi = 0;

    if(i<=10){
         marcai = "toyota";
         modeloi = "modelo "+String(i);
         annioi = 2010+i;
        listaAutos.push(new auto(marcai,modeloi, annioi));
    }else if (i<=10){
         marcai = "tesla";
         modeloi = "modelo "+String(i);
         annioi = 2000+i;
        listaAutos.push(new auto(marcai,modeloi, annioi));
    }else if (i<=20){
         marcai = "nissan";
         modeloi = "modelo "+String(i);
         annioi = 2000+i;
        listaAutos.push(new auto(marcai,modeloi, annioi));
    }else{
        marcai = "renault";
        modeloi = "modelo "+String(i);
        annioi = 1990+i;
       listaAutos.push(new auto(marcai,modeloi, annioi));
    }
    
}

listaAutos;


var articulos = [
    {nombre: "Bici",costo: 3000},
    {nombre: "TV",costo: 2500},
    {nombre: "Libro",costo: 320},
    {nombre: "Celular",costo: 1000},
    {nombre: "Laptop",costo: 2000},
    {nombre: "Teclado",costo: 500},
    {nombre: "Audifonos",costo: 1700},
];


///-----------FILTER---------------
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

articulosFiltrados;

/*
result
articulosFiltrados =
[
    {
        "nombre": "Libro",
        "costo": 320
    },
    {
        "nombre": "Teclado",
        "costo": 500
    }
]

*/

///-----------MAP---------------
var nombreArticulos = articulos.map(function(articulo){
return articulo.nombre;
});

nombreArticulos;
/*
result nombreArticulos =
[
    "Bici",
    "TV",
    "Libro",
    "Celular",
    "Laptop",
    "Teclado",
    "Audifonos"
]
*/

nuevosArticulos = articulos.map(function(articulo){

    function mapArticulo (nombre,costo) {
        this.nombre = nombre;
        this.costo = costo;
    }

    return new mapArticulo (articulo.nombre,`$ ${String(articulo.costo)}`);
    });

    nuevosArticulos;

    /*
    result nuevosArticulos =
    [
    {
        "nombre": "Bici",
        "costo": "$ 3000"
    },
    {
        "nombre": "TV",
        "costo": "$ 2500"
    },
    {
        "nombre": "Libro",
        "costo": "$ 320"
    },
    {
        "nombre": "Celular",
        "costo": "$ 1000"
    },
    {
        "nombre": "Laptop",
        "costo": "$ 2000"
    },
    {
        "nombre": "Teclado",
        "costo": "$ 500"
    },
    {
        "nombre": "Audifonos",
        "costo": "$ 1700"
    }
]
    */


///-----------FIND---------------
var encuentraArticulo = articulos.find(
function(articulo){
return articulo.nombre === "Laptop";
});

encuentraArticulo;

/*
result
encuentraArticulo = 
{
    "nombre": "Laptop",
    "costo": 2000
}
*/

///--------FOREACH---------

articulos.forEach(
    function(articulo){
    console.log(articulo.nombre);
    });
/*
VM2937:3 Bici
VM2937:3 TV
VM2937:3 Libro
VM2937:3 Celular
VM2937:3 Laptop
VM2937:3 Teclado
VM2937:3 Audifonos
*/

///--------SOME---------
/// OJO: solo regresa True or false 
var articulosBaratos = articulos.some(
    function(articulo){
    return articulo.costo <= 700;
    });

    articulosBaratos;
/*
result
articulosBaratos = true; // sí, hay articulos menores a 700
*/
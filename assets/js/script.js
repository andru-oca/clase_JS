for (let i = 0; i < 8; i++) {
    console.log(i);
}

/*
variables
*/

let nombre = "Ana Rosa";

console.log(
    "LA VARIABLE NOMBRE -> ",
    nombre,
    "es un tipo de dato : ==> ",
    typeof nombre
);

let reasignacion = [
    123,
    () => {
        console.log("hola");
    },
    23.99,
    {
        nombre: "javier",
        edad: 88,
    },
];

for (n_datos of reasignacion) {
    nombre = n_datos;
    console.log(
        "LA VARIABLE NOMBRE -> ",
        nombre,
        "es un tipo de dato : ==> ",
        typeof nombre
    );
}

// const CONSTANTE = [];
// CONSTANTE.push("hola ramiro!");

// console.log(CONSTANTE);

// const VALOR = 1123;
// VALOR = "1123";

let comparacion = 1 * "ola";

console.log(comparacion);

console.log("09880" / 0);

// /*ejemplo en vivo!*/
// let nombreUsr = prompt("Hola! Ingresa tu nombre!");
// let cantPizza = prompt("INGRESA TU CANTIDAD DE PIZZAS DESEADAS");

// cantPizza = parseInt(cantPizza);

// cantPizza = cantPizza + 1;
// console.log(cantPizza, typeof cantPizza);
// cantPizza += 1;
// console.log(cantPizza, typeof cantPizza);
// cantPizza++;
// console.log(cantPizza, typeof cantPizza);
// ++cantPizza;
// console.log(cantPizza, typeof cantPizza);

// /*
//         <center>
//             <h1>CLASE DE JS!!</h1>
//         </center>
// */

// document.write(
//     "<center> <h1>EL cliente pidio finalmente " +
//         cantPizza +
//         " pizzas! 🍕</h1>        <h2> Del usuario: " +
//         nombreUsr +
//         "</h2>        <center>"
// );

const URI = "https://jsonplaceholder.typicode.com/users";

fetch(URI)
    .then((datos) => datos.json())
    .then((datos) => {
        let init = "<center>";
        let final = "</center>";
        let cuerpoDeresultado = "";

        datos.forEach((usr) => {
            cuerpoDeresultado += `
                <div>
                <h3> CANTIDAD DE PIZZAS 2 pizzas 🍕</h3>
                <h4>LA direccion es ${usr.address.street} </h4>
                <h4>Nombre del usuario es: ${usr.name}</h4>
                <h5>🔊 ${usr.phone}</h5>
                </div>
                `;
        });

        let injetBody = init + cuerpoDeresultado + final;

        document.write(injetBody);
    });

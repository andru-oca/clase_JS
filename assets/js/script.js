console.log("hola cuack! 🙀");

let nombre = "ROBERTO";

console.log(
    "ESTO ES LO QUE VALE: ",
    nombre,
    " y el tipo de dato es: =>",
    typeof nombre
);

nombre = 990;

console.log(
    "ESTO ES LO QUE VALE: ",
    nombre,
    " y el tipo de dato es: =>",
    typeof nombre
);

nombre = "abba" == "ABBA";

console.log(
    "ESTO ES LO QUE VALE: ",
    nombre,
    " y el tipo de dato es: =>",
    typeof nombre
);

nombre = () => console.log("hago algo");

console.log(
    "ESTO ES LO QUE VALE: ",
    nombre,
    " y el tipo de dato es: =>",
    typeof nombre
);

nombre = {
    persona: "912381728903",
    edad: 78676,
};

console.log(
    "ESTO ES LO QUE VALE: ",
    nombre,
    " y el tipo de dato es: =>",
    typeof nombre
);

/**
 *
 *  */

const data = "hello" * 1;
console.log(data);

/*COMPARADADOR*/

console.log("1 != 1", 1 != 1);
console.log("1 == '1'", 1 == 1);
console.log("1 === 1", 1 === 1);
console.log("1 === '1'", 1 === "1");

/*
 */

// let cantPizzas = prompt("INGRESA LA CANTIDAD DE PIZZAS A PEDIR");

// cantPizzas = parseInt(cantPizzas);

// cantPizzas = cantPizzas + 1;
// cantPizzas += 1;
// cantPizzas++;

// let msgOut =
//     "<center><h1>Has pedido: " + cantPizzas + " pizzas 🍕<h1> </center>";

// document.write(msgOut);

const URI_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

fetch(URI_ENDPOINT)
    .then((datos) => datos.json())
    .then((datos) => {
        let start = "<";
        let finish = "</";
        let center = "center>";

        var values = "";
        console.log(datos);

        datos.forEach((usr) => {
            values += `
            <h3> Hola, ${usr.name} </h3>
            <h2> Phone number:  ${usr.phone} </h2>
            <h3>Bienvido a  🙀 </h3>
            
            `;
        });

        let result = start + center + values + finish + center;
        // console.log(result);

        document.write(result);
    });

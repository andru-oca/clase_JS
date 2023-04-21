let nombre = "JUAN";

console.log("ESTO ES nombre =>", nombre, typeof nombre);

nombre = 1987;

console.log("ESTO ES nombre =>", nombre, typeof nombre);

nombre = () => console.log("SOY PEPE");

console.log("ESTO ES nombre =>", nombre, typeof nombre);

nombre = {
    pepe: "PEPE",
    edad: 34,
};

console.log("ESTO ES nombre =>", nombre, typeof nombre);

// comentario en linea

/*
 SOY COMENTARIO EN BLOQUE

 que pasa cuando necesito const
*/

// const PASSWORD = 9867;

// PASSWORD = "9876";

const listaNombres = [];

listaNombres.push("soy un pato!");

console.log(listaNombres);

listaNombres[0] = "soy otro pato!";

// console.log(listaNombres);

// listaNombres = "soy otro tipo de dato";

console.log(100 / "0");

console.dir({
    estricta: 1 === "1", // = = =
    validacion: 1 == "1", // = =
});

let pato = "soy un pato";

pato = "2.99";

console.log(typeof parseFloat(pato), typeof pato);

// let cantPizzas = prompt("INGRESA LA CANTIDAD DE PIZZAS");
// let nombClient = prompt("Tu nombre, por favor!");

// cantPizzas = parseInt(cantPizzas);

// // cantPizzas = cantPizzas + 1;
// // cantPizzas += 1;
// cantPizzas++;

// console.log("INGRESASTE => " + cantPizzas, typeof cantPizzas);

/**
 *
 *
 * CHOCLO!
 */

// console.log(
//     "INGRESASTE => " + cantPizzas,
//     typeof parseInt(prompt("INGRESA LA CANTIDAD DE PIZZAS"))
// );

// let mensaje =
//     " <center> <h1>EL CLIENTE --> " +
//     nombClient +
//     " <-- </h1>" +
//     " <h3>PIDIO " +
//     cantPizzas +
//     " PIZZAS </h3> </center>";

// document.write(mensaje);

let endPointUsrs = "https://jsonplaceholder.typicode.com/users";

fetch(endPointUsrs)
    .then((data) => data.json())
    .then((users) =>
        users.forEach((usr) => {
            let userPedido = `<h3>  🍕 EL CLIENTE --> ${usr.name} ha pedido ${usr.id}  pizzas </h3> `;
            document.write(userPedido);
        })
    );

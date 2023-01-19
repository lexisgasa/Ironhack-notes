// Functions
// Crea una función que reciba tres argumentos: una string name, 
// un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn 
// será un objeto que contiene dos keys: livesInCity y livesInTown. 
// Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años
//  y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive
//   en la ciudad o vive en un pueblo.
//console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));



let bioCheck = ( firstName, age, livesIn ) => {

    return `${firstName} tiene ${age} años y vive en ${livesIn ? "la ciudad" : "el pueblo"}`;
}

// clg ( "name", age, true/false  ) -> name tiene age años y vive en (true) la ciudad / (false) el pueblo




//Álvaro approach

// const bioCheck = (firstName, age, livesIn) => {
//     return `${firstName} tiene ${age} años y vive en ${livesIn.livesInCity ? "la ciudad" : "el pueblo"}`;
// }

// clg ( "name", age, {livesInCity: boolean, livesInTown: bolean} ) -> marcar true o false en el objeto del clg

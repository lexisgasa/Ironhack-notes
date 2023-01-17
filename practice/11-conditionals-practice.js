// conditionals 1
let buyTicket = () => {
  let age = parseInt(prompt("Qué edad tienes"));

  if (age <= 5) {
    console.log("Ticket gratis!");
  } else if (age < 15) {
    console.log("Tienes un descuento de un 20%");
  } else if (age >= 15 && age <= 60) {
    console.log("Paga el precio que toca");
  } else if (age > 60) {
    console.log("Tienes un descuento de un 40%");
  } else {
    console.log("Wow");
  }
};
// conditionals 2
let doSomething = () => {
  let name, action;
  name = prompt("Pon tu nombre aquí");
  action = prompt("Choose an action, greet, say bye, rest");
  switch (action) {
    case "greet":
      console.log(`Hello, ${name}!`);
      break;
    case "say bye":
      console.log(`Bye bye, ${name}!`);
      break;
    case "rest":
      console.log(`I'm signing off now`);
      break;
    case "scream":
      console.log(`AAAAHHHHHHHHHH!!!!!!!!!!!!!!!!!`);
      break;
    default:
      console.log(
        "I don't know how to do that yet. I'm just a little program :("
      );
      break;
  }
};

// Vamos a crear un switch statement para loguear distintos resultados segun los prompts que entre el usuario.
//  Primero le daremos la opción de entrar su name, que nos guardaremos en una variable
//  . Después le permitiremos entrar una action, que también guardaremos en una variable. Nos encargaremos de esta action y, según lo que el usuario entre,
//  haremos console log de alguna cosa u otra.
// Si el usuario entra "greet", lo que vamos a loguear es "Hello, [name]!". Si el usuario entra "say bye", vamos a loguear "Bye bye, [name]!".
//  Si el usuario entra "ask" loguearemos "How are you today, [name]?". Si entra "scream" vamos a loguear "AHHHHHHHH!!!!!!!".
//  Si entra "rest" vamos a loguear "I'm signing off now.". En caso de que la action no sea ninguna de las anteriores,
//  lo que loguearemos será: "I don't know how to do that yet, I'm just a little program :(".

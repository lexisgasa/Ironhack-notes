const bioCheck = (firstName, age, livesIn) => {
    return `${firstName} tiene ${age} años y vive en ${
      livesIn.livesInCity ? "la ciudad" : "el pueblo"
    }`;
  };
 
  console.log(bioCheck("Martina", 42, { livesInCity: false, livesInTown: true }));
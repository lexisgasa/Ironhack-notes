// Iteration 1: Names and Input
let hacker1 = "Timon";
console.log(`the driver's name is ${hacker1}`);

let hacker2 = "Pumba"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characers`)
} else if (
    hacker1.length === hacker2.length) {
        console.log(`Wow, both have equally long names, ·${hacker1.length} characters!`)
    } else {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    }

// Iteration 3: Loops

let capitalizedName = "";

for (let i = 0; i < hacker1.length; i++) {
    capitalizedName += hacker1[i].toUpperCase()+ " ";  
}
console.log(capitalizedName)   

let reversedName = hacker2.split("").reverse().join("");
console.log(reversedName)

let names = [hacker1, hacker2].sort()
if (names[0] === "Timon") {
    console.log(`${hacker1} goes first`)
} else if (names[0] !== "Timon") {
    console.log(`Yo, ${hacker2} goes first definitely`)
} else {
    console.log("What?! You both have the same name?")
}
